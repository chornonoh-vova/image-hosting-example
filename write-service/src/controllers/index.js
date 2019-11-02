import imageService from '../use-cases/index.js';

import makeUploadImage from './upload-image.js';

const imageController = Object.freeze({
  makeUploadImage: makeUploadImage({
    insertImage: imageService.insertImage,
  }),
});

export default imageController;
