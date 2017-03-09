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
      Contacts.all()
        .then(contacts => res.status(200).send(contact))
        .catch(error => res.status(400).send(error));
    },

    onecontact(req, res) {
        Contacts.findByid()(req.params.id)
          .then(contacts => res.status(200).send(contacts))
          .catch(error => res.status(400).send(error));
      },
      // My id is 4, keep gettting back {}.


};
