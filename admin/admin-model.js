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
    return db('admins').select('id', 'username');
  }
  function findBy(filter) {
    return db('admins')
      .select('id', 'username')
      .where(filter);
  }
  function add(admin) {
    return db('admins')
      .insert(admin, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }  
  function findById(id) {
    return db('admins')
      .select('id', 'username')
      .where({ id })
      .first();
  }
  function remove(id) {
    return db('admins')
      .where({ id })
      .del();
  }
  function update(id, changes) {
    return db('admins')
      .where({ id })
      .update(changes, '*');
  } 
  