/**
 * Function to make get image controller.
 * @param {*} param0 dependencies
 */
export default function makeGetImage({getOneImage}) {
  /**
   * Get image controller, returns image if found the image, or json response if
   * not.
   * @param {any} httpRequest incoming http request
   */
  return async function getImage(httpRequest) {
    // get one image from database by its id
    const image = await getOneImage({
      _id: httpRequest.params.id,
    });

    const response = {
      headers: {},
      statusCode: 500,
    };

    // if image was not found, returns null
    if (image) {
      response['Content-type'] = image.mimetype;
      response.statusCode = 200;
      response.file = image.path;

      return response;
    } else {
      response['Content-type'] = 'application/json';
      response.statusCode = 404;
      response.body = {error: 'Image not found'};

      return response;
    }
  }
}