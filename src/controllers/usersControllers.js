import { STATUS_CODE } from '../enums/statusCodes.js';
import usersRepository from '../repositories/usersRepository.js';

export default async function getUserByToken(req, res) {
  const { user } = res.locals;

  try {
    const searchQueryVisits = await usersRepository.queryGetVisitSumById(
      user.id
    );
    const visitCount = searchQueryVisits.rows[0]?.sum || 0;
    const searchQueryURLS = await usersRepository.queryGetURLSbyUserId(user.id);
    let userURLs = searchQueryURLS.rows;
    userURLs = userURLs.map((e) => {
      return {
        id: e.id,
        shortUrl: e.shortURL,
        url: e.url,
        visitCount: e.visitCount,
      };
    });
    res.status(STATUS_CODE.OK).send({
      id: user.id,
      name: user.name,
      visitCount: visitCount,
      shortenedUrls: userURLs,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export async function getUserRanking(req, res) {
  try {
    const result = await usersRepository.queryGetLinksRanking();
    res.send(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}
