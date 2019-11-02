import imagesDb from '@hbvhuwe/image-hosting-commons/data-access/index.js';

import makeInsertImage from './insert-image.js';

const imageService = Object.freeze({
  insertImage: makeInsertImage({imagesDb}),
});

export default imageService;
