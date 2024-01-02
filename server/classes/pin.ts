import { ObjectId } from 'bson';

export interface Pin {
    _id: ObjectId;
    latitude: number;
    longitude: number;
}