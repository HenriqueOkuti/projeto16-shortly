import { nanoid } from 'nanoid';
import { STATUS_CODE } from '../enums/statusCodes.js';
import urlsRepository from '../repositories/urlsRepository.js';

export async function shortenURL(req, res) {
  const user = res.locals.user;
  const { url } = req.body;
  if (!url) {
    return res.send('No URL').status(STATUS_CODE.UNPROCESSABLE);
  }
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(urlRegex);
  if (!url.match(regex)) {
    console.log('invalid');
    return res.status(STATUS_CODE.UNPROCESSABLE).send('Invalid URL');
  }
  const CHAR_LIMIT = 8;
  const shortUrl = nanoid(CHAR_LIMIT);
  try {
    await urlsRepository.queryCreateShortURL(url, shortUrl, user);
    res.send({ shortUrl }).status(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function getURLByID(req, res) {
  const { id } = req.params;
  try {
    const searchQuery = await urlsRepository.queryGetURLSById(id);
    const [url] = searchQuery.rows;
    if (!url) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    res.send({
      id: url.id,
      shortUrl: url.shortURL,
      url: url.url,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function redirectURL(req, res) {
  const { shortUrl } = req.params;
  try {
    const searchQuery = await urlsRepository.queryGetURLByShortURL(shortUrl);
    if (searchQuery.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    const [url] = searchQuery.rows;
    await urlsRepository.queryUpdateURLVisitCount(url.id);
    res.redirect(STATUS_CODE.OK, url.url);
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function deleteURL(req, res) {
  const { id } = req.params;
  const { user } = res.locals;
  try {
    const searchQuery = await urlsRepository.queryGetURLSById(id);
    if (searchQuery.rowCount === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    const [url] = searchQuery.rows;
    if (user.id !== url.userId) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }
    await urlsRepository.queryDeleteURL(id);
    res.sendStatus(STATUS_CODE.NO_CONTENT);
  } catch (error) {
    console.log(error);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
