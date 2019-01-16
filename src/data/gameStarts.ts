const A = true;
const D = false;

export const states = [
    {
        name: 'Beacon',
        id: 'beacon',
        width: 10,
        height: 10,
        initialState: [
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, A, A, D, D, D],
            [D, D, D, D, D, A, A, D, D, D],
            [D, D, D, A, A, D, D, D, D, D],
            [D, D, D, A, A, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
        ],
    },

    {
        name: 'Blinker',
        id: 'blinker',
        width: 10,
        height: 10,
        initialState: [
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, A, D, D, D, D, D],
            [D, D, D, D, A, D, D, D, D, D],
            [D, D, D, D, A, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
        ],
    },

    {
        name: 'Toad',
        id: 'toad',
        width: 10,
        height: 10,
        initialState: [
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, A, D, D, D, D, D, D, D],
            [D, D, D, A, A, D, D, D, D, D],
            [D, D, A, A, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
        ],
    },

    {
        name: 'Glider',
        id: 'glider',
        width: 10,
        height: 10,
        initialState: [
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, A, A, A, D, D, D, D],
            [D, D, D, D, A, A, A, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
            [D, D, D, D, D, D, D, D, D, D],
        ],
    },
];
