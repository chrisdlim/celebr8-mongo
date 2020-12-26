function createUserForDb(db) {
  return {
    user: 'celebr8',
    pwd: 'celebr8!',
    roles: [
      {
        role: 'dbOwner',
        db: db,
      }
    ]
  }
}
// TODO: should parameterize these at some point...

// for celebr8
db.createUser(createUserForDb('celebr8'))

// for cats
db = db.getSiblingDB('cats')
db.createUser(createUserForDb('cats'))