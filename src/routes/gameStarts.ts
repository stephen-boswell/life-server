import express from 'express';

import { StateDescription, GameStateDescription } from '../models/StateDescription';
import { logger } from '../lib/logger';

interface GameStateRequest extends express.Request {
    gameStateDescription: GameStateDescription;
}

interface GameSummaryQuery{
    page: Number;
    pageSize: Number;
}

const getGameStateSummaries = async (query:GameSummaryQuery = { page: 0, pageSize: 10 }) => {
    return StateDescription.find(
        {},
        'name id',
    );
};

export const gameStartsRouter = express.Router();

gameStartsRouter.use((req, res, next) => {
    next();
});

gameStartsRouter.param('id', (req:GameStateRequest, res, next, id) => {
    StateDescription.findById(id).then(
        (result) => {
            req.gameStateDescription = result;
            next();
        },
        (err) => {
            logger.error(err.message);
            res.status(404).json({ message: err.message });
        },
    );
});

gameStartsRouter.get('/:id', (req:GameStateRequest, res) => {
    if (req.gameStateDescription) {
        res.json(req.gameStateDescription);
    } else {
        res.status(404).end();
    }
});

gameStartsRouter.get('/', (req, res) => {
    getGameStateSummaries(req.query).then(
        (result) => {
            res.json(result);
        },
        (err) => {
            logger.error(err.message);
            res.status(500).end();
        },
    );
});
