const ContactsController= require("../controllers/contacts");


module.exports = (app) => {
   app.post('/contacts', ContactsController.create);
    app.get('/contacts', ContactsController.list);
};
