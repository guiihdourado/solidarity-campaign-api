import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const user = await authenticateUser.execute({ email });

  return response.json(user);
});

export default sessionsRouter;
