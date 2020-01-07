const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);
// add knex db and err-thang still 


module.exports = { 
    find,
    findBy,
    findById,
    add,
    remove,
    update,
}


function find() {
    return db('stories').select('id', 'username');
  }
  function findBy(filter) {
    return db('stories')
      .select('id','name')
      .where(filter);
  }
  function add(story) {
    return db('stories')
      .insert(story, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }  
  function findById(id) {
    return db('stories')
      .select('id', 'name')
      .where({ id })
      .first();
  }
  function remove(id) {
    return db('stories')
      .where({ id })
      .del();
  }
  function update(id, changes) {
    return db('stories')
      .where({ id })
      .update(changes, '*');
  } 
  