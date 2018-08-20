//Update the name of the template_controller below and rename the file.
const users = require("../controllers/users.js");
const quests = require("../controllers/quests.js");

module.exports = (app) => {
  app.get('/', users.index);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.use('/logout', users.logout);

  app.use(authMiddleware);
  app.get('/authUser', users.showProtected);
  app.get('/quest/:id', quests.doQuest);
}

function authMiddleware(req, res, next){
  if(!req.session.user_id){
    res.redirect('/');
  }else{
    next();
  }
}
