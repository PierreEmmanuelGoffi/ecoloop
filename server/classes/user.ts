import { ObjectId } from 'bson';
import { Pin } from '../classes/pin';
import { Order } from '../classes/order';

export interface User {
    _id: ObjectId;
    email: string;
    password: string;
    pins: Pin[];
    orders: Order[];
}