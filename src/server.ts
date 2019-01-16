import express from 'express';

import { connect } from 'mongoose';

import { logger } from './lib/logger';

import { gameStartsRouter } from './routes/gameStarts';

const port = 3000;
const server = express();

server.use((req, res, next) => {
    logger.info(`${new Date()}: ${req.method} ${req.url}`);
    next();
});

server.use('/game-starts', gameStartsRouter);

connect('mongodb://localhost:27017/life', { useNewUrlParser: true }).then(
    () => {
    server.listen(port, () => {
        logger.info(`Life Server listening on port ${port}.`);
    });
},  (err) => {
    logger.error('An error occurred starting the server.', err);
});
