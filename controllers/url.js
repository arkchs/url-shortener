import { urlModel } from "../models/url.js";
import ShortUniqueId from "short-unique-id";

export async function handleGetShortenedUrl(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ eror: "Url is required" });
  }
  const uid = new ShortUniqueId({ length: 10 });
  const shortID = uid.rnd();
  const newUrl = await urlModel.create({
    shortenedUrl: shortID,
    redirectionUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

export async function handleGetRedirectedUrl(req, res) {
  console.log("inside the get route");
  const shortID = req.params.shortId;
  console.log(shortID);
  const filter = { shortenedUrl: shortID };
  const update = {
    $push: {
      visitHistory: {
        timestamps: Date.now(),
      },
    },
  };
  const entry = await urlModel.findOne(filter);
  // const entry = await urlModel.findAndUpdateOne(filter,update);
  // console.log(entry.redirectionUrl);
  res.redirect( entry.redirectionUrl);
}
