const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    if(req.session.user_id){
      res.redirect('/authUser');
      return;
    }
    res.render("index");
  },
  showProtected: (req, res) => {
    knex('quests')
    .then((result)=>{
      knex('user')
      .where('id', req.session.user_id).then((user)=>{
        res.render("authUser", {
          user: user[0],
          quests: result
        });
      })
    })
  },
  register: (req, res) => {
    knex("user")
      .insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(() => {
        res.redirect('/');
      })
  },
  login: (req, res) => {
    knex("user")
      .where("user.email", req.body.email)
      .then((result) => {
        console.log(result);
        // if pw is valid
        if (result[0].password === req.body.password) {
          req.session.user_id = result[0].id;
          res.redirect('/authUser');
          // if pw is invalid
        } else {
          res.redirect('/');
        }
      })
  },
  logout: (req, res) => {
    req.session.destroy(function(err) {
      if(err) throw err;
      res.redirect('/');
    })
  }
}
