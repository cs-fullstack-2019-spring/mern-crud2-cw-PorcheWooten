let express = require('express');
let router = express.Router();
let RSVPCollection = require('../models/RSVPSchema');

/*
    ENDPOINT IMPLEMENTATION OF A SIMPLE RSVP WEB SERVICE
 */
// Return the list of all the current RSVPs
router.get('/listAll', function (req, res, next) {
    console.log(`LIST RSVPS`);
    RSVPCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// Get a specific RSVP
router.get('/:id', function (req, res, next) {
    console.log(`LIST RSVP ${req.params.id}`);
    RSVPCollection.find({_id: req.params.id}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })

});

// Update an existing RSVP
router.put('/:id', function (req, res, next) {
    console.log(`UPDATE RSVP ${req.body.rsvp_person} ${req.body.rsvp_going}`);
    RSVPCollection.findOneAndUpdate({_id: req.params.id}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Delete a specific RSVP -IMPLEMENT YOUR OWN FUNCTION
router.delete('/:id', function (req, res, next) {
    RSVPCollection.deleteOne(req.body, (err, results)=>{
        if(err) res.send(err);
        else res.send('Deleted!!')
    });
    res.send(`DELETE RSVP ${req.params.id}`);
});


//Create a new RSVP -IMPLEMENT YOUR OWN FUNCTION
router.post('/addNew', function (req, res, next) {
    RSVPCollection.create(req.body, (err, results)=>{
        // console.log(`${req.body.rsvp_person} ${req.body.rsvp_going}`);
        if(err) res.send(err);
        else res.send(results);
    });

});

module.exports = router;
