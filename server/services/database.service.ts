require('dotenv').config();

import { Db, MongoClient, ServerApiVersion } from 'mongodb';
import 'reflect-metadata';

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;
const USER_COLLECTION = process.env.USER_COLLECTION;

const client = new MongoClient(DATABASE_URL!, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    }
});

export class DatabaseService {
    private db!: Db;

    constructor() {
        this.start();
    }

    async start() {
        try {
            await client.connect().catch((error: Error) => {
                console.log(error.stack);
                throw new Error(error.message);
            })

            this.db = client.db(DATABASE_NAME);
            console.log('Connected to database');

            if ((await this.db.collection(USER_COLLECTION!).countDocuments()) === 0) {
                console.log('User collection is empty');
            }

        } catch {
            throw new Error('Database connection error');
        } 
    }

    async closeConnection(): Promise<void> {
        return client.close();
    }

    get database(): Db {
        return this.db;
    }
}

export class DbSingleton {
    static instance: DatabaseService;
    constructor() {
        if (!DbSingleton.instance) {
            DbSingleton.instance = new DatabaseService();
        }
    }

    getInstance(): DatabaseService {
        return DbSingleton.instance;
    }
}
