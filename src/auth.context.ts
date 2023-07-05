import { UnauthorizedException } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';

export const authContext = async ({ req }) => {

    //verifica que no vaya a la ruta de login
    if (req.body.operationName === 'login') return;
    const token = req.headers.authorization || '';
    if (!token) throw new UnauthorizedException();
    const newToken = token.replace('Bearer ', '');
    const user = jwt.verify(newToken, 'abc123proyectotopicos');
    if (!user) throw new UnauthorizedException();

    return {
        user
    }

};