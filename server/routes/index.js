
const ContactsController= require("../controllers/contacts");


module.exports = (app) => {
  app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });
   app.post('/contacts', ContactsController.create);
    app.get('/contacts', ContactsController.list);
    app.get('/contacts/:id', ContactsController.onecontact);
    app.put('/contacts/:id', ContactsController.updateStuff);
    app.delete('/contacts/:id', ContactsController.delete);
};
