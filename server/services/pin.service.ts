import { injectable } from 'inversify';
import { Collection, ObjectId, WithId } from 'mongodb';
import 'reflect-metadata';
import { Pin } from '../classes/pin';
import { DbSingleton } from './database.service';

@injectable()
export class PinService {
    private databaseService = new DbSingleton().getInstance();
    
    get pinCollection(): Collection<Pin> {
        return this.databaseService.database.collection('Pin');
    }

    async getPinByID(id: ObjectId): Promise<Pin> {
        console.log("in");
        return this.pinCollection
            .findOne({ _id: id })
            .then((pin: WithId<Pin> | null) => {
                if (pin === null) {
                    throw new Error("Le pin n'est pas présent sur la db");
                } else {
                    return pin as Pin;
                }
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération get sur le pin, " + error.message);
            });
    }

    async getAllPins(): Promise<Pin[]> {
        return this.pinCollection
            .find()
            .toArray()
            .then((pins: Pin[]) => {
                return pins;
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération get sur les pins, " + error.message);
            });
    }

    async addPin(newPin: Pin): Promise<boolean> {
        return await this.pinCollection.insertOne(newPin)
            .then(() => {
                return true;
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération ajout d'un pin, " + error.message);
            });
    }

    async deletePin(id: ObjectId): Promise<boolean> {
        return await this.pinCollection.deleteOne({ _id: id })
            .then(() => {
                return true;
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération suppression d'un pin, " + error.message);
            });
    }
}
