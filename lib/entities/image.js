/**
 * @typedef ImageObjectInput
 * @property {string} filePath
 * @property {string} [name]
 * @property {Date} [createdAt]
 * @property {Date} [updatedAt]
 */

/**
 * Function to make image entity.
 * @param {ImageObjectInput} param0 image object
 */
export default function makeImage({
  originalname,
  mimetype,
  filename,
  path,
  size,
  createdAt = new Date(),
  updatedAt = new Date(),
}) {
  // check that image has file path attached
  if (!path || !filename) {
    throw Error('Image must have file path associated');
  }

  // returns data access object
  return Object.freeze({
    getOriginalName: () => originalname,
    getMimeType: () => mimetype,
    getFilename: () => filename,
    getPath: () => path,
    getSize: () => size,
    getCreatedAt: () => createdAt,
    getUpdatedAt: () => updatedAt,
  });
}
