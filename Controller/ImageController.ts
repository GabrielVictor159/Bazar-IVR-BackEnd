import { Router, Request, Response } from 'express';
import ImageService from '../services/ImageService';

const router = Router();

router.post('/', (req: Request, res: Response) => {
ImageService.saveImage(req, res);
});

router.delete('/:name', (req: Request, res: Response) => {
ImageService.deleteImage(req, res);
});

export default router;