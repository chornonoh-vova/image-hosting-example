import imageService from '../use-cases/index.js';

import makeGetImage from './get-image.js';

const imageController = Object.freeze({
  getImage: makeGetImage({
    getOneImage: imageService.getOneImage,
  }),
});

export default imageController;
