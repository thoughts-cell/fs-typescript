import express, { type Request, type Response } from 'express';
import diaryService from '../services/diaryService.ts';
import { type DiaryEntry,  type NonSensitiveDiaryEntry } from '../types.ts';
import {  errorMiddleware } from '../middleware.ts';
 
const router = express.Router();

router.get('/', (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  const data = diaryService.getNonSensitiveEntries();
  res.send(data);
});

router.get('/:id', (_req, res) => {
  const diary = diaryService.findById(Number(_req.params.id));

  if (diary) {
    res.send(diary);
  } else 
    res.sendStatus(404);
  }
);
router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

// router.post('/', newDiaryParser, (_req: Request<unknown, unknown, NewDiaryEntry>, res: Response<DiaryEntry>) => {  
//   const addedEntry = diaryService.addDiary(_req.body);  
//   res.json(addedEntry);
// });

router.use(errorMiddleware);

export default router;