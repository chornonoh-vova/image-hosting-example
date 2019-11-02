import mongodb from 'mongodb';

import makeImagesDb from './images-db.js';

// obtain connection information from environment
const url = process.env.DB_URL;

// create MongoDb client for connection
const client = new mongodb.MongoClient(url, {useNewUrlParser: true});

/**
 * Function to make database access object from created mongodb client
 * @return {Promise<Db>}
 */
export async function makeDb() {
  // check that client is connected
  if (!client.isConnected()) {
    await client.connect();
  }

  // uses database name from connection string
  return client.db();
}

// default export is images db
const imagesDb = makeImagesDb({makeDb});

export default imagesDb;
