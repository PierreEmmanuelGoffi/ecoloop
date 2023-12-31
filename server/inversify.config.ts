import { DatabaseService } from './services/database.service';
import { Container } from 'inversify';
import { Application } from './app';
import { UserController } from './controllers/user.controller';
import { ServerClass } from './server';
import { UserService } from './services/users.service';
import { TYPES } from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(TYPES.Server).to(ServerClass);
    container.bind(TYPES.Application).to(Application);
    container.bind(TYPES.DatabaseService).to(DatabaseService);

    container.bind(TYPES.UserController).to(UserController);
    container.bind(TYPES.UserService).to(UserService);

    return container;
};
