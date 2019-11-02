import express from 'express';

import imageController from './controllers/index.js';

import makeCallback from '@hbvhuwe/image-hosting-commons/express-callback.js';

const app = express();

// get image api
app.get('/images/:id', makeCallback(imageController.getImage));

app.listen(80, () => {
  console.log('Service is listening');
});
