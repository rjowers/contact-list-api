const Contacts = require("../models").Contacts;

module.exports = {
  create (req, res) {
    Contacts.create({
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      city: req.body.city,
      state: req.body.state,
      photo_url: req.body.photo_url,

    })
      .then(contacts => res.status(201).send(contacts))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
      Contacts.findAll()
        .then(contacts => res.status(201).send(contacts))
        .catch(error => res.status(400).send(error));
    },

    onecontact(req, res) {
        Contacts.findById(req.params.id)
          .then(contacts => res.status(200).send(contacts))
          .catch(error => res.status(400).send(error));
      },
      // My id is 4, keep gettting back {}.



updateStuff (req, res){
  Contacts.update(req.body, {
    fields: ['name', 'phonenumber', 'city', 'state', 'photo_url'],
      where: {
          id: req.params.id
        }
  })
  .then((contacts) => res.status(200).send(contacts))
  .catch((error) => res.status(400).send(error));
},

delete(req, res){
  Contacts.destroy({
         where: {
                id:req.params.id
              }
          })
  .then((contacts) => res.status(200).send(contacts))
  .catch((error) => res.status(400).send(error));
}



};














// update(req, res) {
//  return Contacts
// //  where: {
// //    authorId: 4
// //  }
//    .findById(req.params.id)
//    .then(contacts => {
//      return contacts
//        .update({
//          name: req.body.name,
//          phonenumber: req.body.phonenumber,
//          city: req.body.city,
//          state: req.body.state,
//          photo_url: req.body.photo_url,
//        })
//        .then(() => res.status(200).send(contacts))
//        .catch((error) => res.status(400).send(error));
//    })
// },
