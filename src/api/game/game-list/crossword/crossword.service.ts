import { type ICrosswordGameData } from '../../../../common/interface/games/crossword.interface';

export class CrosswordService {
  getGameData(): ICrosswordGameData {
    return {
      title: 'Crossword F1 Edition',
      grid_rows: 10,
      grid_cols: 10,
      cells: [
        // --- BARIS 0 ---
        { x: 0, y: 0, is_black: true },
        { x: 1, y: 0, is_black: true },
        { x: 2, y: 0, is_black: true },
        { x: 3, y: 0, is_black: true },
        { x: 4, y: 0, is_black: true },
        { x: 5, y: 0, is_black: true },
        { x: 6, y: 0, is_black: true },
        { x: 7, y: 0, is_black: true },
        { x: 8, y: 0, is_black: false, number: 4, value: undefined }, // Awal CHECO
        { x: 9, y: 0, is_black: true },

        // --- BARIS 1 ---
        { x: 0, y: 1, is_black: true },
        { x: 1, y: 1, is_black: false, number: 5, value: undefined }, // Awal FERRARI
        { x: 2, y: 1, is_black: true },
        { x: 3, y: 1, is_black: true },
        { x: 4, y: 1, is_black: true },
        { x: 5, y: 1, is_black: true },
        { x: 6, y: 1, is_black: true },
        { x: 7, y: 1, is_black: true },
        { x: 8, y: 1, is_black: false, value: undefined },
        { x: 9, y: 1, is_black: true },

        // --- BARIS 2 (VERSTAPPEN) ---
        { x: 0, y: 2, is_black: false, number: 1, value: undefined }, // Awal VERSTAPPEN
        { x: 1, y: 2, is_black: false, value: undefined },
        { x: 2, y: 2, is_black: false, value: undefined },
        { x: 3, y: 2, is_black: false, value: undefined },
        { x: 4, y: 2, is_black: false, number: 6, value: undefined }, // Awal TOTO
        { x: 5, y: 2, is_black: false, value: undefined },
        { x: 6, y: 2, is_black: false, value: undefined },
        { x: 7, y: 2, is_black: false, value: undefined },
        { x: 8, y: 2, is_black: false, value: undefined },
        { x: 9, y: 2, is_black: false, value: undefined },

        // --- BARIS 3 ---
        { x: 0, y: 3, is_black: true },
        { x: 1, y: 3, is_black: false, value: undefined },
        { x: 2, y: 3, is_black: true },
        { x: 3, y: 3, is_black: true },
        { x: 4, y: 3, is_black: false, value: undefined },
        { x: 5, y: 3, is_black: true },
        { x: 6, y: 3, is_black: true },
        { x: 7, y: 3, is_black: true },
        { x: 8, y: 3, is_black: false, value: undefined },
        { x: 9, y: 3, is_black: true },

        // --- BARIS 4 (MOM) ---
        { x: 0, y: 4, is_black: true },
        { x: 1, y: 4, is_black: false, value: undefined },
        { x: 2, y: 4, is_black: true },
        { x: 3, y: 4, is_black: true },
        { x: 4, y: 4, is_black: false, value: undefined },
        { x: 5, y: 4, is_black: true },
        { x: 6, y: 4, is_black: true },
        { x: 7, y: 4, is_black: false, number: 2, value: undefined }, // Awal MOM
        { x: 8, y: 4, is_black: false, value: undefined },
        { x: 9, y: 4, is_black: false, value: undefined },

        // --- BARIS 5 ---
        { x: 0, y: 5, is_black: true },
        { x: 1, y: 5, is_black: false, value: undefined },
        { x: 2, y: 5, is_black: true },
        { x: 3, y: 5, is_black: true },
        { x: 4, y: 5, is_black: false, value: undefined },
        { x: 5, y: 5, is_black: true },
        { x: 6, y: 5, is_black: true },
        { x: 7, y: 5, is_black: true },
        { x: 8, y: 5, is_black: true },
        { x: 9, y: 5, is_black: true },

        // --- BARIS 6 ---
        { x: 0, y: 6, is_black: true },
        { x: 1, y: 6, is_black: false, value: undefined },
        { x: 2, y: 6, is_black: true },
        { x: 3, y: 6, is_black: true },
        { x: 4, y: 6, is_black: true },
        { x: 5, y: 6, is_black: true },
        { x: 6, y: 6, is_black: true },
        { x: 7, y: 6, is_black: true },
        { x: 8, y: 6, is_black: true },
        { x: 9, y: 6, is_black: true },

        // --- BARIS 7 (KIMI) ---
        { x: 0, y: 7, is_black: false, number: 3, value: undefined }, // Awal KIMI
        { x: 1, y: 7, is_black: false, value: undefined },
        { x: 2, y: 7, is_black: false, value: undefined },
        { x: 3, y: 7, is_black: false, value: undefined },
        { x: 4, y: 7, is_black: true },
        { x: 5, y: 7, is_black: true },
        { x: 6, y: 7, is_black: true },
        { x: 7, y: 7, is_black: true },
        { x: 8, y: 7, is_black: true },
        { x: 9, y: 7, is_black: true },

        // --- BARIS 8 (KOSONG) ---
        { x: 0, y: 8, is_black: true },
        { x: 1, y: 8, is_black: true },
        { x: 2, y: 8, is_black: true },
        { x: 3, y: 8, is_black: true },
        { x: 4, y: 8, is_black: true },
        { x: 5, y: 8, is_black: true },
        { x: 6, y: 8, is_black: true },
        { x: 7, y: 8, is_black: true },
        { x: 8, y: 8, is_black: true },
        { x: 9, y: 8, is_black: true },

        // --- BARIS 9 (KOSONG) ---
        { x: 0, y: 9, is_black: true },
        { x: 1, y: 9, is_black: true },
        { x: 2, y: 9, is_black: true },
        { x: 3, y: 9, is_black: true },
        { x: 4, y: 9, is_black: true },
        { x: 5, y: 9, is_black: true },
        { x: 6, y: 9, is_black: true },
        { x: 7, y: 9, is_black: true },
        { x: 8, y: 9, is_black: true },
        { x: 9, y: 9, is_black: true },
      ],
      clues: {
        across: [
          {
            number: 1,
            question: 'Orang Dengan Genetik Juara (ODGJ)',
            answer: 'VERSTAPPEN',
            length: 10,
            start_x: 0,
            start_y: 2,
          },
          {
            number: 2,
            question: 'Apa pengganti DRS di regulasi baru F1 2026?',
            answer: 'MOM',
            length: 3,
            start_x: 7,
            start_y: 4,
          },
          {
            number: 3,
            question: 'Bocil Mercedes pengganti Hamilton',
            answer: 'KIMI',
            length: 4,
            start_x: 0,
            start_y: 7,
          },
        ],
        down: [
          {
            number: 4,
            question: 'Menteri Pertahanan Meksiko (F1)',
            answer: 'CHECO',
            length: 5,
            start_x: 8,
            start_y: 0,
          },
          {
            number: 5,
            question:
              'Jumat jumawa, sabtu belasungkawa, minggu entah kemana, senin mengheningkan cipta, selasa kecewa, rabu semakin terluka, kamis kembali percaya, adalah rundown dari tim?',
            answer: 'FERRARI',
            length: 7,
            start_x: 1,
            start_y: 1,
          },
          {
            number: 6,
            question: 'Team Principal yang mirip merek sanitasi Jepang',
            answer: 'TOTO',
            length: 4,
            start_x: 4,
            start_y: 2,
          },
        ],
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateAnswer(_payload: { x: number; y: number; char: string }) {
    // TODO [BE-2]: Nanti Nanda isi ini
    const isCorrect = true;

    return {
      is_correct: isCorrect,
      message: isCorrect ? 'Mantap benar!' : 'Salah woy',
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  finishGame(_payload: { time_spent: number; correct_count: number }) {
    // TODO [BE-2]: Nanti Nanda isi ini
    return {
      message: 'Game Selesai',
      score: 100,
    };
  }
}
