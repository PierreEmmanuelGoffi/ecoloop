import { ObjectId } from 'bson';

export interface Pin {
    id: ObjectId;
    latitude: number;
    longitude: number;
}