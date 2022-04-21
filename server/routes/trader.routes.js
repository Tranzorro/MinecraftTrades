const traderController = require("../controllers/trader.controller");

module.exports = (App) => {
	App.get("/api/traders/getAll", traderController.getAllTraders);
	App.post("/api/traders/create", traderController.createNew);
	App.get("/api/traders/:_id", traderController.getById);
	App.put("/api/traders/edit/:_id", traderController.putById);
	App.delete("/api/traders/delete/:_id", traderController.deleteById);
};
