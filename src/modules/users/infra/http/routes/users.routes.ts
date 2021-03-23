import { Router } from 'express';
import authMiddleware from '../middlewares/auth';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.use(authMiddleware);

usersRouter.get('/', usersController.index);
usersRouter.get('/:user_id', usersController.show);
usersRouter.post('/', usersController.create);
usersRouter.put('/:user_id', usersController.update);

export default usersRouter;
