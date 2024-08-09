const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

const controller = new Controller();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.get('/lookup/:dept_id', controller.lookupUserByDepartmentId);

module.exports = router;