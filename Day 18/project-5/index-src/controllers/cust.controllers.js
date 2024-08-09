const Cust = require('../models/cust.model.js');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
Cust.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};
// Create and Save a new Cust
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Create a new Cust
const topper = new Cust({
  cid: req.body.cid,
  cpan: req.body.cpan,
  caadhar: req.body.caadhar,
  cdob: req.body.cdob

});
// Save user in the database
topper.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new topper."
});
});
};
// Find a single Cust with a id
exports.findOne = (req, res) => {
 Cust.findById(req.params.id)
  .then(topper => {
  if(!topper) {
   return res.status(404).send({
   message: "Cust not found with id " + req.params.id
 });
}
 res.send(topper);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "Cust not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting customer with id " + req.params.id
});
});
};
// Update a Cust identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Find user and update it with the request body
Cust.findByIdAndUpdate(req.params.id, {
  cid: req.body.cid,
  cpan: req.body.cpan,
  caadhar: req.body.caadhar,
  cdob: req.body.cdob
}, {new: true})
.then(topper => {
 if(!topper) {
   return res.status(404).send({
   message: "customer not found with id " + req.params.id
 });
}
res.send(topper);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "customer not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating topper with id " + req.params.id
});
});
};
// Delete a Cust with the specified id in the request
exports.delete = (req, res) => {
Cust.findById(req.params.id)
.then(topper => {
if(!topper) {
  return res.status(404).send({
  message: "customer not found with id " + req.params.id
});
}
res.send({message: "customer been deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "customer not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};