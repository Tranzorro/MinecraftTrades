const TraderModel = require('../models/trader.model');


module.exports.getAllTraders = (req, res)=>{
    console.log('inside get all traders');
    TraderModel.find({})
    .then(allTraderObjects => {
        console.log('found all traders!');
        console.log(allTraderObjects);
        return res.json(allTraderObjects);
    })
    .catch((err) =>{
        console.log("error:" + err);
        return res.json(err);
    })
}

module.exports.getById = (req, res) => {
    console.log('inside of get a trader by this id.');
    console.log('getting trader by id of: $(req.params._id)');
    TraderModel.findById(req.params._id)
        .then((theTrader) => {
            console.log("found trader by id was successful");
            console.log(theTrader);
            return res.json(theTrader);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.putById = (req, res) => {
    console.log('inside of put a trader by this id.');
    TraderModel.findOneAndUpdate({_id: req.params._id},
        req.body,
        {
            new: true,
            runValidators: true
        }
        )
        .then((theUpdatedTrader) => {
            console.log("updated the trader successfully");
            console.log(theUpdatedTrader);
            return res.json(theUpdatedTrader);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.status(400).json(err);
        })
}
module.exports.deleteById = (req, res) => {
    console.log('inside of delete a trader by this id.');
    TraderModel.deleteOne({_id: req.params._id})
        .then(removedTrader => {
            console.log("trader wasn't productive enough. deleted.");
            console.log(removedTrader);
            return res.json(removedTrader);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}
module.exports.createNew = (req, res) => {
    console.log('inside of creat new trader.');
    console.log(req.body);

    TraderModel.create(req.body)
        .then((newTraderObject)=> {
            console.log("new trader created successfully");
            console.log(newTraderObject);
            return res.json(newTraderObject);
        })
        .catch((err) =>{
            console.log("error:" + err);
            return res.json(err);
        })
}