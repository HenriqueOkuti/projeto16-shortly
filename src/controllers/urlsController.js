import { nanoid } from 'nanoid';
import { STATUS_CODE } from '../enums/statusCodes.js';
import { createShortURL } from '../queries/queries.js';

export default async function shortenURL(req, res) {
  const user = res.locals.user;
  const { url } = req.body;

  if (!url) {
    return res.send('No URL').status(STATUS_CODE.UNPROCESSABLE);
  }

  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(urlRegex);

  console.log('match: ', url.match(regex));

  if (!url.match(regex)) {
    console.log('invalid');
    return res.status(STATUS_CODE.UNPROCESSABLE).send('Invalid URL');
  }

  const CHAR_LIMIT = 8;
  const shortUrl = nanoid(CHAR_LIMIT);

  try {
    await createShortURL(url, shortUrl, user);
    res.send({ shortUrl }).status(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
