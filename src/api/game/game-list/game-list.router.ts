/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import { Router } from 'express';

import { crosswordRouter } from './crossword/crossword.router';
import { PairOrNoPairController } from './pair-or-no-pair/pair-or-no-pair.controller';
import { QuizController } from './quiz/quiz.controller';

const GameListRouter = Router();

GameListRouter.use('/quiz', QuizController);

GameListRouter.use('/crossword', crosswordRouter);
GameListRouter.use('/pair-or-no-pair', PairOrNoPairController);

export default GameListRouter;
