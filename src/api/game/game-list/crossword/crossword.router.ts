import { Router } from 'express';

import { CrosswordController } from './crossword.controller';

// GANTI NAMA VARIABEL & EXPORTNYA
export const crosswordRouter = Router();
const controller = new CrosswordController();

crosswordRouter.get('/', controller.getGame);
crosswordRouter.post('/submit', controller.submitAnswer);
crosswordRouter.post('/finish', controller.finish);
