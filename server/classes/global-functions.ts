import { ObjectId } from 'mongodb';

export const isValidId = (idString: string): boolean => {
    let id: ObjectId | undefined;
    let idParsed;
    try {
        id = new ObjectId(idString);
        idParsed = true;
    } catch (error) {
        idParsed = false;
    }
    return idParsed && id !== undefined;
};
