// create user for services
db.createUser({
  user: 'username',
  pwd: 'password',
  roles: ['readWrite',]
});

// create collection for storing images
db.createCollection('images');
