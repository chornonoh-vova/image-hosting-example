import makeImage from '@hbvhuwe/image-hosting-commons/entities/image.js';

/**
 * Function to make insert image use case.
 * @param {any} param0 dependencies
 */
export default function makeInsertImage({imagesDb}) {
  /**
   * Insert image use case. Simply takes image info and inserts it to database.
   * @param {any} imageInfo image information
   */
  return async function insertImage(imageInfo) {
    const image = makeImage(imageInfo);

    return imagesDb.insert({
      originalname: image.getOriginalName(),
      mimetype: image.getMimeType(),
      filename: image.getFilename(),
      path: image.getPath(),
      size: image.getSize(),
      createdAt: image.getCreatedAt(),
      updatedAt: image.getUpdatedAt(),
    });
  }
}
