import { ObjectId } from 'bson';

export interface Order {
    id: ObjectId;
    start: string;
    end: string;
    state: string;
}