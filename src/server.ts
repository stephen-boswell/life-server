import express from 'express';
import cors from 'cors';

import { connect } from 'mongoose';

import { logger } from './lib/logger';

import { gameStartsRouter } from './routes/gameStarts';

const port = 3000;
const app = express();

app.use((req, res, next) => {
    logger.info(`${new Date()}: ${req.method} ${req.url}`);
    next();
});

app.use(cors());

app.use('/game-starts', gameStartsRouter);

connect('mongodb://localhost:27017/life', { useNewUrlParser: true }).then(
    () => {
    app.listen(port, () => {
        logger.info(`Life Server listening on port ${port}.`);
    });
},  (err) => {
    logger.error('An error occurred starting the server.', err);
});
