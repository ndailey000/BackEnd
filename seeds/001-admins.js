
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {id: 1, username: 'Batuhan', password: '1000'},
        {id: 2, username: 'Chris', password: '1001'},
        {id: 3, username: 'Jake', password: '1002'},
        {id: 4, username: 'Nick', password: '1003'},
        {id: 5, username: 'Novshiel', password: '1004'},
        {id: 6, username: 'Shannon', password: '1005'},
        {id: 7, username: 'Spencer', password: '1006'},
      ]);
    });
};
