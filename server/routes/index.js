const ContactsController= require("../controllers/contacts");


module.exports = (app) => {
   app.post('/contacts', ContactsController.create);
    app.get('/contacts', ContactsController.list);
    app.get('/contacts/:id', ContactsController.onecontact);
    app.put('/contacts/:id', ContactsController.updateStuff);
    app.delete('/contacts/:id', ContactsController.delete);
};
