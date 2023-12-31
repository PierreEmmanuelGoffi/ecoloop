import { Container } from 'inversify';
import 'reflect-metadata';
import { containerBootstrapper } from './inversify.config';
import { ServerClass } from './server';
import { TYPES } from './types';

void (async () => {
    const container: Container = await containerBootstrapper();
    const server: ServerClass = container.get<ServerClass>(TYPES.Server);

    server.init();
})();
