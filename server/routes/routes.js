import { uploadImage } from '../controller/image.controller.js';
import express from 'express';
import upload from '../utils/upload.js';
import { downloadImage } from '../controller/image.controller.js';

const router = express.Router();

router.post('/upload',upload.single("file"), uploadImage);
router.get("/File/:FileId",downloadImage)

export default router;
