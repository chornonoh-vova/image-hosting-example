import express from 'express';
import multer from 'multer';

import imageController from './controllers/index.js';

import makeCallback from '@hbvhuwe/image-hosting-commons/express-callback.js';

const app = express();
const upload = multer({dest: '/images/'});

// upload image api
app.post(
    '/images', upload.single('file'),
    makeCallback(imageController.makeUploadImage));

app.listen(80, () => {
  console.log('Service is listening');
});
