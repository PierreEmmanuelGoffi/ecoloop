import { DatabaseService } from './services/database.service';
import { Container } from 'inversify';
import { Application } from './app';
import { UserController } from './controllers/user.controller';
import { PinController } from './controllers/pin.controller';
import { UserService } from './services/user.service';
import { PinService } from './services/pin.service';
import { ServerClass } from './server';
import { TYPES } from './types';

export const containerBootstrapper: () => Promise<Container> = async () => {
    const container: Container = new Container();

    container.bind(TYPES.Server).to(ServerClass);
    container.bind(TYPES.Application).to(Application);
    container.bind(TYPES.DatabaseService).to(DatabaseService);

    container.bind(TYPES.UserController).to(UserController);
    container.bind(TYPES.PinController).to(PinController);
    container.bind(TYPES.UserService).to(UserService);
    container.bind(TYPES.PinService).to(PinService);

    return container;
};
