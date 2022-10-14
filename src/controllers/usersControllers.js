import { STATUS_CODE } from '../enums/statusCodes.js';
import {
  queryGetURLSbyUserId,
  queryGetVisitSumById,
} from '../queries/allQueries.js';

export default async function getUserByToken(req, res) {
  const { user } = res.locals;

  try {
    const searchQueryVisits = await queryGetVisitSumById(user.id);
    const visitCount = searchQueryVisits.rows[0]?.sum || 0;
    const searchQueryURLS = await queryGetURLSbyUserId(user.id);
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
