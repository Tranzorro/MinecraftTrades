const  mongoose = require("mongoose");


const TradersSchema = new mongoose.Schema({
    traderName:{
        type: String,
        message: "hmmmm name",
        minlength: [4, "more than 4 characters please."],
        required: [true, "need a name duh."],
    },
    wants: {
        type: String,
        required: [true, "what do i want?"],
        minlength: [1,"need to not be blank my dude."],
    },
    gives: {
        type: String,
        required: [true, "what you want?"],
        minlength: [1, "well? im not taking stuff for free... what do i give you?"],
    },
}, {timestamps: true});

const TraderModel = mongoose.model("Trader", TradersSchema);

module.exports = TraderModel;