import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  role: 'admin' | 'user';
}

export default function auth(
  request: Request,
  _: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { secret } = authConfig.jwt;
    const decoded = verify(token, secret);

    const { sub, role } = decoded as ITokenPayload;

    request.user = {
      id: sub,
      role
    };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
}
