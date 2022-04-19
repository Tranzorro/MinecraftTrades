const  mongoose = require("mongoose");


const TradersSchema = new mongoose.Schema({

    traderName:{
        traderProfileImage:String,
        traderName: String,
        // message: "hmmmm name",
        // minlength: [4, "more than 4 characters please."],
        // required: [true, "need a name duh."],
    },

    tradesContent: [
        {
            wantName:String,
            giveName:String,
            wantItemCount:Number,
            giveItemCount:Number,
            wantImageUrl:String,
            giveImageUrl:String,
            cssClassName:String,
            // isWant:Boolean
        }
],
    // gives: {
    //     type: String,
    //     required: [true, "what you want?"],
    //     minlength: [1, "well? im not taking stuff for free... what do i give you?"],
    // },
}, {timestamps: true});

const TraderModel = mongoose.model("Trader", TradersSchema);

module.exports = TraderModel;