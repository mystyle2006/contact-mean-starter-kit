var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

router.get('/', function(req, res, next){
	Contact.find(function(err, contacts){
		if(err) {
			console.log(err); 
			return next(err);
		}
		res.json(contacts);
	});
});

router.post('/', function(req,res,next){
	console.log(req.body);
	var contact = new Contact(req.body);

	contact.save(function(err,contact){
		if(err){
			console.log(err);
			return next(err);
		}
		return res.json(contact);
	});
});

router.delete('/:id', function(req,res,next){
	var id = req.params.id;
	console.log(id);
	Contact.findByIdAndRemove(id,function(err,doc){
		if(err){
			console.log(err);
			return next(err);
		}
		return res.json(doc);
	});
});

router.get('/:id', function(req,res,next){
	var id = req.params.id;
	console.log(id);
	Contact.findOne({_id: id}, function(err,contact){
		if(err){
			console.log(err);
			return next(err);
		}
		return res.json(contact);
	});
});

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	console.log(id + '/' + req.body);
	Contact.findOneAndUpdate({_id: id}, req.body, function(err,contact){
		if(err){
			console.log(err);
			return next(err);
		}
		return res.json(contact);
	});
})

module.exports = router;