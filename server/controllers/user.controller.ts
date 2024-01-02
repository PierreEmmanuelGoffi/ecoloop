import { User } from '../classes/user';
import { isValidId } from '../classes/global-functions';
import { UserService } from '../services/user.service';
import { NextFunction, Request, Response, Router } from 'express';
import * as Httpstatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { ObjectId } from 'mongodb';
import { TYPES } from '../types';

@injectable()
export class UserController {
    router!: Router;

    constructor(@inject(TYPES.UserService) private userService: UserService) {
        this.configureRouter();
    }

    configureRouter(): void {
        this.router = Router();
        
        /**
         * @swagger
         * 
         *  definitions:
         *      user:
         *          type: object
         *          properties:
         *              email:
         *                  type: string
         *                  required: true
         *              password:
         *                  type: string
         *                  required: true
         *              location:
         *                  $ref: '#/definitions/pin'
         *              orders:
         *                  type: array
         *                  items:
         *                      $ref: '#/definitions/order'
         */

        /**
         * @swagger
         * 
         *  definitions:
         *      pin:
         *          type: object
         *          properties:
         *              lattitude:
         *                  type: number
         *                  required: true
         *              longitude:
         *                  type: number
         *                  required: true
         */

        /**
         * @swagger
         * 
         *  definitions:
         *      order:
         *          type: object
         *          properties:
         *              start:
         *                  type: string
         *                  required: true
         *              end:
         *                  type: string
         *                  required: true
         *              state:
         *                  type: string
         *                  required: true
         */

        /**
         * @swagger
         * tags:
         *   - name: User
         *     description: User endpoint
         */

        /**
         * @swagger
         *
         * /api/user/ids:
         *   get:
         *     description: return all the user ids
         *     tags:
         *       - User
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         schema:
         *          type: array
         *          items:
         *           type: string
         */
        this.router.get('/ids', async (req: Request, res: Response, next: NextFunction) => {
            this.userService
                .getAllUserIDs()
                .then((userIds: ObjectId[]) => {
                    res.send(userIds);
                })
                .catch((error: Error) => {
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
        });

        /**
         * @swagger
         *
         * /api/user/{id}:
         *   get:
         *     description: return a user by id
         *     tags:
         *       - User
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *          type: string
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         schema:
         *          $ref: '#/definitions/user'
         */
        this.router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            if (isValidId(req.params.id)) {
                this.userService
                    .getUserByID(new ObjectId(req.params.id))
                    .then((user: User) => {
                        res.send(user);
                    })
                    .catch((error: Error) => {
                        res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                    });
            } else {
                res.status(Httpstatus.StatusCodes.BAD_REQUEST).send('Identifiant Invalide');
            }
        });

        /**
         * @swagger
         *
         * /api/user/email/{email}:
         *   get:
         *     description: return a user by email
         *     tags:
         *       - User
         *     parameters:
         *       - in: path
         *         name: email
         *         schema:
         *          type: string
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         schema:
         *          $ref: '#/definitions/user'
         */
        this.router.get('/email/:email', async (req: Request, res: Response, next: NextFunction) => {
            this.userService
                .getUserByEmail(req.params.email)
                .then((user: User) => {
                    res.send(user);
                })
                .catch((error: Error) => {
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
        });

        /**
         * @swagger
         *
         * /api/user:
         *   post:
         *     description: create a user
         *     tags:
         *       - User
         *     requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/definitions/user'
         *     produces:
         *       - application/json
         *     responses:
         *       201:
         *         description: CREATED
         */
        this.router.post('/', async (req: Request, res: Response) => {
            this.userService
                .addUser(req.body)
                .then((wasAdded: boolean) => {
                    if (wasAdded) {
                        res.sendStatus(Httpstatus.StatusCodes.CREATED).send();
                    } else {
                        res.sendStatus(Httpstatus.StatusCodes.BAD_REQUEST).send();
                    }
                })
                .catch((error: Error) => {
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
        });

        /**
         * @swagger
         *
         * /api/user/{id}/order:
         *   patch:
         *     description: add an order to a user
         *     tags:
         *       - User
         *     parameters:
         *         - in: path
         *           name: id
         *           schema:
         *            type: string
         *     requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/definitions/order'
         *     produces:
         *       - application/json
         *     responses:
         *       201:
         *         description: OK
         */
        this.router.patch('/:id/order', async (req: Request, res: Response) => {
            if (isValidId(req.params.id)) {
                this.userService
                .addOrderToUser(new ObjectId(req.params.id), req.body)
                .then((wasAdded: boolean) => {
                    if (wasAdded) {
                        res.sendStatus(Httpstatus.StatusCodes.OK).send();
                    } else {
                        res.sendStatus(Httpstatus.StatusCodes.BAD_REQUEST).send();
                    }
                })
                .catch((error: Error) => {
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
            } else {
                res.status(Httpstatus.StatusCodes.BAD_REQUEST).send('Identifiant Invalide');
            }
        });
        
        /**
         *  @swagger
         *
         * /api/user/{id}:
         *  patch:
         *     description: update a user location by id
         *     tags:
         *         - User
         *     parameters:
         *         - in: path
         *           name: id
         *           schema:
         *            type: string
         *     requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/definitions/pin'
         *     produces:
         *         - application/json
         *     responses:
         *       200:
         *         description: OK
         */
        this.router.patch('/:id', async (req: Request, res: Response) => {
            if (isValidId(req.params.id)) {
                this.userService
                    .updateUserLocation(new ObjectId(req.params.id), req.body)
                    .then(() => {
                        res.sendStatus(Httpstatus.StatusCodes.OK);
                    })
                    .catch((error: Error) => {
                        res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                    });
            } else {
                res.status(Httpstatus.StatusCodes.BAD_REQUEST).send('Identifiant Invalide');
            }
        });
    }
}
