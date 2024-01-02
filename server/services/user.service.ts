import { injectable } from 'inversify';
import { Collection, ObjectId, WithId } from 'mongodb';
import 'reflect-metadata';
import { User } from '../classes/user';
import { Pin } from '../classes/pin';
import { Order } from '../classes/order';
import { DbSingleton } from './database.service';

@injectable()
export class UserService {
    private databaseService = new DbSingleton().getInstance();
    
    get userCollection(): Collection<User> {
        return this.databaseService.database.collection('User');
    }

    async getUserByID(id: ObjectId): Promise<User> {
        return this.userCollection
            .findOne({ _id: id })
            .then((user: WithId<User> | null) => {
                if (user === null) {
                    throw new Error("Le user n'est pas présent sur la db");
                } else {
                    return user as User;
                }
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération get sur le user, " + error.message);
            });
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userCollection
            .findOne({ email: email })
            .then((user: WithId<User> | null) => {
                if (user === null) {
                    throw new Error("Le user n'est pas présent sur la db");
                } else {
                    return user as User;
                }
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération get sur le user, " + error.message);
            });
    }

    async getAllUserIDs(): Promise<ObjectId[]> {
        const idArray: ObjectId[] = [];
        return this.userCollection
            .find()
            .toArray()
            .then((users: User[]) => {
                users.forEach((user) => {
                    idArray.push(user._id);
                });
                return idArray;
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération get sur les user ids, " + error.message);
            });
    }

    async addUser(newUser: User): Promise<boolean> {
        return await this.userCollection.insertOne(newUser)
            .then(() => {
                return true;
            })
            .catch((error: Error) => {
                throw new Error("Échec de l'opération ajout user, " + error.message);
            });
    }

    async updateUser(userId: ObjectId, newUser: User): Promise<boolean> {
        const filter = { _id: userId };
        const update = { $set: newUser };
    
        try {
            const result = await this.userCollection.updateOne(filter, update);
    
            if (result.matchedCount === 1 && result.modifiedCount === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Échec de l'opération de modification d'un utilisateur, " + error.message);
        }
    }

    async addPinToUser(userId: ObjectId, newPin: Pin): Promise<boolean> {
        const filter = { _id: userId };
        const update = { $push: { pins: newPin } };
    
        try {
            const result = await this.userCollection.updateOne(filter, update);
    
            if (result.matchedCount === 1 && result.modifiedCount === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Échec de l'opération ajout d'un pin à l'utilisateur, " + error.message);
        }
    }
    
    async addOrderToUser(userId: ObjectId, newOrder: Order): Promise<boolean> {
        const filter = { _id: userId };
        const update = { $push: { orders: newOrder } };
    
        try {
            const result = await this.userCollection.updateOne(filter, update);
    
            if (result.matchedCount === 1 && result.modifiedCount === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error("Échec de l'opération ajout de commande à l'utilisateur, " + error.message);
        }
    }
}
