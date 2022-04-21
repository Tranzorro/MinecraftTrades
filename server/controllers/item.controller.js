const ItemModel = require('../models/item.model');


module.exports.getAllItems = (req, res)=>{
    console.log('inside get all Items');
    ItemModel.find({})
    .then(allItemObjects => {
        console.log('found all Items!');
        console.log(allItemObjects);
        return res.json(allItemObjects);
    })
    .catch((err) =>{
        console.log("error:" + err);
        return res.json(err);
    })
}

module.exports.getById = (req, res) => {
    console.log('inside of get a Item by this id.');
    console.log('getting Item by id of: $(req.params._id)');
    ItemModel.findById(req.params._id)
        .then((theItem) => {
            console.log("found Item by id was successful");
            console.log(theItem);
            return res.json(theItem);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.putById = (req, res) => {
    console.log('inside of put a Item by this id.');
    ItemModel.findOneAndUpdate({_id: req.params._id},
        req.body,
        {
            new: true,
            runValidators: true
        }
        )
        .then((theUpdatedItem) => {
            console.log("updated the Item successfully");
            console.log(theUpdatedItem);
            return res.json(theUpdatedItem);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.status(400).json(err);
        })
}
module.exports.deleteById = (req, res) => {
    console.log('inside of delete a Item by this id.');
    ItemModel.deleteOne({_id: req.params._id})
        .then(removedItem => {
            console.log("Item wasn't productive enough. deleted.");
            console.log(removedItem);
            return res.json(removedItem);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.createNew = (req, res) => {
    console.log('inside of creat new Item.');
    console.log(req.body);

    ItemModel.create(req.body)
        .then((newItemObject)=> {
            console.log("new Item created successfully");
            console.log(newItemObject);
            return res.json(newItemObject);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}