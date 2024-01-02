import { Pin } from '../classes/pin';
import { isValidId } from '../classes/global-functions';
import { PinService } from '../services/pin.service';
import { NextFunction, Request, Response, Router } from 'express';
import * as Httpstatus from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { ObjectId } from 'mongodb';
import { TYPES } from '../types';

@injectable()
export class PinController {
    router!: Router;

    constructor(@inject(TYPES.PinService) private pinService: PinService) {
        this.configureRouter();
    }

    configureRouter(): void {
        this.router = Router();

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
         * tags:
         *   - name: Pin
         *     description: Pin endpoint
         */

        /**
         * @swagger
         *
         * /api/pin/pins:
         *   get:
         *     description: return all pins
         *     tags:
         *       - Pin
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: Array of pins
         *         schema:
         *           type: array
         *           items:
         *             $ref: '#/definitions/pin'
         */
        this.router.get('/pins', async (req: Request, res: Response, next: NextFunction) => {
            this.pinService
                .getAllPins()
                .then((pins: Pin[]) => {
                    res.send(pins);
                })
                .catch((error: Error) => {
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
        });

        /**
         * @swagger
         *
         * /api/pin/{id}:
         *   get:
         *     description: return a pin by id
         *     tags:
         *       - Pin
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
         *          $ref: '#/definitions/pin'
         */
        this.router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            if (isValidId(req.params.id))
            {
                this.pinService
                .getPinByID(new ObjectId(req.params.id))
                .then((pin: Pin) => {
                    console.log("allo");
                    res.send(pin);
                })
                .catch((error: Error) => {
                    console.log("non");
                    res.status(Httpstatus.StatusCodes.NOT_FOUND).send(error.message);
                });
            } else {
                console.log("bye");
                res.status(Httpstatus.StatusCodes.BAD_REQUEST).send('Identifiant Invalide');
            }
        });

        /**
         * @swagger
         *
         * /api/pin:
         *   post:
         *     description: create a pin location
         *     tags:
         *       - Pin
         *     requestBody:
         *         required: true
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/definitions/pin'
         *     produces:
         *       - application/json
         *     responses:
         *       201:
         *         description: CREATED
         */
        this.router.post('/', async (req: Request, res: Response) => {
            this.pinService
                .addPin(req.body)
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
         *  @swagger
         *
         * /api/pin/{id}:
         *  delete:
         *     description: delete a pin by id
         *     tags:
         *         - Pin
         *     parameters:
         *         - in: path
         *           name: id
         *           schema:
         *            type: string
         *     produces:
         *         - application/json
         *     responses:
         *       200:
         *         description: NO_CONTENT
         */
        this.router.delete('/:id', async (req: Request, res: Response) => {
            if (isValidId(req.params.id)) {
                this.pinService
                    .deletePin(new ObjectId(req.params.id))
                    .then(() => {
                        res.sendStatus(Httpstatus.StatusCodes.NO_CONTENT);
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
