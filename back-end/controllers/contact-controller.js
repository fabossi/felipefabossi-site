// const express = require('express');
const Contact = require('../models/contac-model');
const mail_controller = require('../controllers/mail-controller');
const admin_controller = require('../controllers/admin-email-controller');

exports.postContact = (req, res) => {
  return new Promise((resolve, reject) => {
    const contact = new Contact({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    contact
      .save()
      .then(result => {
        if (result) {
          res.send(result);
          resolve(result)
        } else {
          res.status(500).json({
            message: 'Fields Required.'
          });
        }
        mail_controller.sendEmail(req.body.email);
        admin_controller.sendAdminEmail(req.body.email, req.body.message);
      })
      .catch(error => {
        res.status(500).json({
          message: 'Fields Required.'
        });
        reject(error);
      });
  })
}
