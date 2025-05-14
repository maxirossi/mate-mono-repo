import { Router, Request, Response } from 'express';
/* controllers */
import { UsersController } from '../Modules/User/infrastructure/controllers/UsersController';

const router = Router();
const usersController = new UsersController();

/* Health Check */

router.get('/health', (req: Request, res: Response) => {
  res.status(200).send({
    status: 'OK',
    message: 'Success'
  });
});

const apiVersion : string = 'v1';

/* Users Routes */

router.post(`/${apiVersion}/users`, (req: Request, res: Response) => usersController.createUser(req, res));
router.get(`/${apiVersion}/users`, (req: Request, res: Response) => usersController.getAllUsers(req, res));
router.get(`/${apiVersion}/users/:userId`, (req: Request, res: Response) => usersController.getUserById(req, res));
router.put(`/${apiVersion}/users/:userId`, (req: Request, res: Response) => usersController.updateUser(req, res));
router.delete(`/${apiVersion}/users/:userId`, (req: Request, res: Response) => usersController.deleteUser(req, res));
router.post(`/${apiVersion}/users/authenticate`, (req: Request, res: Response) => usersController.authenticateUser(req, res));

export default router;
