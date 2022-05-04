import { Request, Response } from 'express';
import { LESSONS } from './db-data';
import { setTimeout } from 'timers';

export function searchLessons(req: Request, res: Response) {
  const queryParams = req.query;

  const courseId = Number(queryParams['courseId']);
  const filter = queryParams['filterr'] as string || '';
  const sortOrder = queryParams['sortOrder'] || 'asc';
  const pageNumber = Number(queryParams['pageNumber']) || 0;
  const pageSize = Number(queryParams['pageSize']) || 3;

  let lessons;

  if (courseId) {
    lessons = Object.values(LESSONS)
      .filter(lesson => lesson.courseId == courseId)
      .sort((l1, l2) => l1.id - l2.id);
  } else {
    lessons = Object.values(LESSONS);
  }

  if (filter) {
    let value = filter.toLowerCase();
    lessons = lessons.filter(
      lesson => lesson.description.trim().toLowerCase().search(value) >= 0,
    );
  }

  if (sortOrder == 'desc') {
    lessons = lessons.reverse();
  }

  const initialPos = pageNumber * pageSize;

  const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

  setTimeout(() => {
    res.status(200).json({ payload: lessonsPage });
  }, 1000);
}
