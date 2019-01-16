import { connect } from 'mongoose';

import { StateDescription } from '../models/StateDescription';
import { states } from '../data/gameStarts';

import { logger } from '../lib/logger';

connect('mongodb://localhost:27017/life', { useNewUrlParser: true }).then(
    () => {
        StateDescription.insertMany(states).then(
            () => {
                logger.info('Default states loaded');
                process.exit();
            },
            (err) => {
                logger.error('Failed to load default states.', err);
                process.exit();
            },
        );
    },
    (err) => {
        logger.error('Failed to connect to database', err);
        process.exit();
    },
);
