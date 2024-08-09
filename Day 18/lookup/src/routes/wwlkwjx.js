  exports.chalapathiJoin = (req, res) => {
    const userId = req.params.id;
  
    User.aggregate([
      {
        $lookup: {
          from: 'Dept',
          localField: 'udeptid',
          foreignField: 'deptid',
          as: 'deptInfo'  // Renamed for clarity
        }
      }
    ])
    .then(result => {
      if (!result || result.length === 0) {
        return res.status(404).send({
          message: "User not found with id " + userId
        });
      }
      res.send(result);  // Send the actual joined result
    })
    .catch(err => {
      console.error(err); // Log the error for debugging
      return res.status(500).send({
        message: "Could not join user with id " + userId
      });
    });
  };