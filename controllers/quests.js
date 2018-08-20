const knex = require("../db/knex.js");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  doQuest: (req, res)=>{
    knex('quests')
    .where('quests.id', req.params.id)
    .then((result)=>{
      var xp = getRandomInt(result[0].lowest_xp, result[0].highest_xp);
      knex('user')
      .where('user.id', req.session.user_id)
      .increment('points', xp)
      .then(()=>{
        res.redirect('/');
      })
    })
  }
}

// if(isNaN(req.session.user.points) || req.session.user.points == null){
//   req.session.user.points = 0;
// }
