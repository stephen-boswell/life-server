import { Document, Schema, Model, model } from 'mongoose';

export type gameCellState = boolean;
export type gameRowState = gameCellState[];
export type gameState = gameRowState[];

export interface GameStateDescription extends Document {
    name: string;
    id: string;
    width: number;
    height: number;
    initialState: gameState;
}

const GameStateDescriptionSchema:Schema = new Schema({
    name: String,
    width: Number,
    height: Number,
    initialState: [[Boolean]],
});

export const StateDescription:Model<GameStateDescription> = model<GameStateDescription>(
    'StateDescription',
    GameStateDescriptionSchema,
);
