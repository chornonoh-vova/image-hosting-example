/**
 * Function to make upload image controller.
 * @param {any} param0 dependencies
 */
export default function makeUploadImage({insertImage}) {
  /**
   * Upload image controller, returns info from database in json response after
   * uploading image.
   * @param {any} httpRequest incoming http request
   */
  return async function uploadImage(httpRequest) {
    // extract image info from http request
    const imageInfo = {...httpRequest.file};

    // insert into database
    const inserted = await insertImage({...imageInfo});

    // return json response with 'created' status
    return {
      headers: {'Content-type': 'application/json'},
      statusCode: 201,
      body: {...inserted},
    };
  }
}
