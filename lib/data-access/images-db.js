import mongodb from 'mongodb';

/**
 * Data access layer for images collection in database.
 * @param {{makeDb: () => Promise<any>}} param0 dependencies
 */
export default function makeImagesDb({makeDb}) {
  return Object.freeze({findById, insert});

  /**
   * Function to find only one image from database.
   * @param {{id: string}} param0 id to search
   * @return {Promise<any>}
   */
  async function findById({_id}) {
    // connection to database
    const db = await makeDb();

    // find only one element from collection by id
    const result = await db.collection('images').find({
      _id: mongodb.ObjectId(_id),
    });

    const found = await result.toArray();

    // check if found something
    return found.length === 0 ? null : found[0];
  }

  /**
   * Function to add image to database.
   * @param {any} param0 image info object
   * @return {Promise<any>}
   */
  async function insert({...imageInfo}) {
    // connection to database
    const db = await makeDb();

    const result = await db.collection('images').insertOne({
      ...imageInfo,
    });

    // return inserted object
    return result.ops[0];
  }
}
