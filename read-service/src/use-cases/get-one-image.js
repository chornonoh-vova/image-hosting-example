/**
 * Function to make get one image use case.
 * @param {any} param0 dependencies
 */
export default function makeGetOneImage({imagesDb}) {
  /**
   * Get one image use case. Returns null if there is not image in database.
   * @param {any} param0 input id to search
   * @return {Promise<any>}
   */
  return function getOneImage({_id}) {
    return imagesDb.findById({_id});
  }
}