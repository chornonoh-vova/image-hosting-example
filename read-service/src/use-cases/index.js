import imagesDb from '@hbvhuwe/image-hosting-commons/data-access/index.js';

import makeGetOneImage from './get-one-image.js';

const imageService = Object.freeze({
  getOneImage: makeGetOneImage({imagesDb}),
});

export default imageService;
