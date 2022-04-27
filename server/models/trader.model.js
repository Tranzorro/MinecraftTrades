const mongoose = require("mongoose");

const TradersSchema = new mongoose.Schema(
	{
		//created a json like setup for an object with specific nested properties within 1 object.
		// this will contain everything needed for a single trader npc. perhaps.
		// i think i have the objects and array brackets mixed up.
		name: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		trades: {
			wants: [
				{
					itemName: String,
					itemTooltip: String,
					itemImageUrl: String,
					itemCount: Number,
				},
			],
			gives: [
				{
					itemName: String,
					itemTooltip: String,
					itemImageUrl: String,
					itemCount: Number,
				},
			],
		},

		// trying something below. ignore it.

		// traderList:{
		// traderProfileImage:String,
		// traderList: String,
		// message: "hmmmm name",
		// minlength: [4, "more than 4 characters please."],
		// required: [true, "need a name duh."],
		// },

		// tradesContent: [
		// {
		// wantName:String,
		// giveName:String,
		// wantItemCount:Number,
		// giveItemCount:Number,
		// wantImageUrl:String,
		// giveImageUrl:String,
		// cssClassName:String,
		// }
		// ],
		// gives: {
		//     type: String,
		//     required: [true, "what you want?"],
		//     minlength: [1, "well? im not taking stuff for free... what do i give you?"],
		// },
	},
	{ timestamps: true }
);

const TraderModel = mongoose.model("Trader", TradersSchema);

module.exports = TraderModel;
