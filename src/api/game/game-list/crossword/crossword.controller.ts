import { type NextFunction, type Request, type Response } from 'express';

import { CrosswordService } from './crossword.service';

export class CrosswordController {
  private service = new CrosswordService();

  getGame = (request: Request, response: Response, next: NextFunction) => {
    try {
      const data = this.service.getGameData();
      response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  submitAnswer = (request: Request, response: Response, next: NextFunction) => {
    try {
      // Kita definisikan tipe datanya manual biar Linter puas
      const payload = request.body as { x: number; y: number; char: string };
      const result = this.service.validateAnswer(payload);

      response.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  finish = (request: Request, response: Response, next: NextFunction) => {
    try {
      // Ini juga kita definisikan manual
      const payload = request.body as {
        time_spent: number;
        correct_count: number;
      };
      const result = this.service.finishGame(payload);

      response.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
