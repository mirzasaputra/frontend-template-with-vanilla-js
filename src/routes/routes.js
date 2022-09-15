const Navigation = '/src/views/index.html';
const ReserveWordPage = '/src/views/reserve-word/index.html';
const GradeScorePage = '/src/views/grade-score/index.html';

export const routes = [
    {
        path: '/',
        meta: {
            title: 'Program Membalikan Kata'
        },
        component: Navigation,
        view: ReserveWordPage
    },
    {
        path: '/grade-score',
        meta: {
            title: 'Program Menghitung Nilai'
        },
        view: GradeScorePage
    },
];