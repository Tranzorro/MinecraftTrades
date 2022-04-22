import axios from "axios";
import { useEffect, useState } from "react";

const TableInput = () => {
	let tableData = [];
	const tableobj = [
		{
			name: "Currency Exchange",
			imgUrl: "images/currency_exchange.png",
			Tooltip: "Give me diamonds, and I'll give you something... special.",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "diamond3",
			col2: "quest nugget",
		},
		{
			col1: "quest nugget10",
			col2: "event token",
		},
		{
			col1: "event token",
			col2: "quest nugget10",
		},
		{
			name: "Event Smith",
			imgUrl: "images/event_smith.png",
			Tooltip: "the event smith",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "event token6",
			col2: "netherite shovel efficiency 6, mending, silk touch, unbreaking 3",
		},
		{
			col1: "event token6",
			col2: "netherite hoe efficiency 6, fortune3, mending, unbreaking 3",
		},
		{
			col1: "event token6",
			col2: "netherite hoe efficiency 6, silk touch, mending, unbreaking 3",
		},
		{
			col1: "event token6",
			col2: "netherite sword fire aspect2, knock back 2, looting3, mending, sharpness 6, sweeping egde 3, unbreaking 3",
		},
		{
			col1: "event token6",
			col2: "netherite pick efficiency 6, mending, silk touch, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite pick efficiency 6, mending, fortune 4, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite axe efficiency 6, mending, sharpness 6, silk touch, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite helm Aqua Affinity, mending, projectile protection 4, protection 4, repiration 3, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite chest fire protection 4, mending, protection 4, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite legs blast protection 4, mending, protection 4, unbreaking 3",
		},
		{
			col1: "event token",
			col2: "netherite boots depth strider3, feather falling 4, fire protection 4, protection 4, mending, soul speed 3, unbreaking 3",
		},
		{
			name: "Event Trader",
			imgUrl: "images/event_trader.png",
			Tooltip: "the event trader",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "event token",
			col2: "sculk sensor",
		},
		{
			col1: "event token",
			col2: "heart of the sea",
		},
		{
			col1: "event token",
			col2: "spore blossom8",
		},
		{
			col1: "event token",
			col2: "invisible16",
		},
		{
			col1: "event token",
			col2: "wet sponge8",
		},
		{
			col1: "event token",
			col2: "ancient debris",
		},
		{
			col1: "event token2",
			col2: "shulker box",
		},
		{
			col1: "event token3",
			col2: "elytra mending, unbreaking3",
		},
		{
			col1: "event token64",
			col2: "Notch Apple the coveted apple of the creator!",
		},
		{
			name: "A not as evil witch",
			imgUrl: "images/a_not_as_evil_witch.png",
			Tooltip: " Where am I? HEHEHE",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "red mushroom4",
			col2: "emerald",
		},
		{
			col1: "brown mushroom4",
			col2: "emerald",
		},
		{
			col1: "poison potato5",
			col2: "emerald",
		},
		{
			col1: "spider eye16",
			col2: "emerald",
		},
		{
			col1: "rotten flesh32",
			col2: "emerald",
		},
		{
			col1: "sugar emerald40",
			col2: "Curse of Vanishing",
		},
		{
			col1: "sugar emerald40",
			col2: "Curse of Binding",
		},
		{
			name: "Adventuring Miner",
			imgUrl: "images/adventuring_miner.png",
			Tooltip: " I crave picnic baskets...",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "small amethyst bud",
		},
		{
			col1: "emerald",
			col2: "medium amethyst bud",
		},
		{
			col1: "emerald",
			col2: "large amethyst bud",
		},
		{
			col1: "emerald4",
			col2: "amethyst cluster",
		},
		{
			col1: "emerald4",
			col2: "amethyst block",
		},
		{
			col1: "diorite8 quartz2",
			col2: "calcite6",
		},
		{
			col1: "andesite8 coal4",
			col2: "tuff6",
		},
		{
			col1: "cobblestone8 blackstone4",
			col2: "cobbled deepslate6",
		},
		{
			col1: "granite8 water bucket",
			col2: "dripstone4",
		},
		{
			col1: "granite water bottle",
			col2: "pointed dripstone",
		},
		{
			col1: "snow block4 empty bucket",
			col2: "bucket of snow",
		},
		{
			name: "Apple Farmer",
			imgUrl: "images/apple_farmer.png",
			Tooltip: " I'm terrified of Doctors... alt=apple farmer> </zzzz>",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "apple4",
		},
		{
			col1: "emerald30 diamond",
			col2: "golden apple",
		},
		{
			name: "Armor Enchanter",
			imgUrl: "images/armor_enchanter.png",
			Tooltip: " Armor buffs!",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald questnugget",
			col2: "blast protection 4",
		},
		{
			col1: "emerald questnugget",
			col2: "fire protection 4",
		},
		{
			col1: "emerald questnugget",
			col2: "Projectile Protection 4",
		},
		{
			col1: "emerald questnugget",
			col2: "protection 4",
		},
		{
			col1: "emerald questnugget",
			col2: "Thorns 3",
		},
		{
			name: "Armor Smith",
			imgUrl: "images/armor_smith.png",
			Tooltip: "You break it, you die.",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald10",
			col2: "iron helm protection 1, unbreaking 2",
		},
		{
			col1: "emerald10",
			col2: "iron chest protection 1, unbreaking2",
		},
		{
			col1: "emerald10",
			col2: "iron legs protection1, unbreaking2",
		},
		{
			col1: "emerald10",
			col2: "iron boots depth strider1, feather falling 2, Protection 1, unbreaking 2",
		},
		{
			col1: "emerald40",
			col2: "diamond helm",
		},
		{
			col1: "emerald40",
			col2: "diamond chest",
		},
		{
			col1: "emerald40",
			col2: "diamond legs",
		},
		{
			col1: "emerald40",
			col2: "diamond boots",
		},
		{
			name: "Baker",
			imgUrl: "images/baker.png",
			Tooltip: "Shhhh! My yeast is rising. alt=a baker",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "bread",
		},
		{
			col1: "emerald",
			col2: "baked potato",
		},
		{
			col1: "emerald",
			col2: "pumpkin pie",
		},
		{
			col1: "emerald3",
			col2: "cookie",
		},
		{
			col1: "emerald",
			col2: "cake",
		},
		{
			name: "Berry Collecter",
			imgUrl: "images/berry_collecter.png",
			Tooltip: "Life is like a box of berries.",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "sweet berry",
			col2: "emerald",
		},
		{
			col1: "honey bottle3",
			col2: "emerald",
		},
		{
			col1: "honey comb",
			col2: "emerald",
		},
		{
			col1: "emerald3",
			col2: "glow berries8",
		},
		{
			name: "Boot Shiner",
			imgUrl: "images/boot_shiner.png",
			Tooltip: "I hope you washed your feet... alt=the boot shiner",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald5",
			col2: "chain boots",
		},
		{
			col1: "emerald5",
			col2: "gold boots",
		},
		{
			col1: "emerald10",
			col2: "iron boots",
		},
		{
			col1: "emerald40",
			col2: "diamond boots",
		},
		{
			col1: "emerald questnugget",
			col2: "depth strider 3",
		},
		{
			col1: "emerald questnugget",
			col2: "frost walker 2",
		},
		{
			col1: "emerald questnugget",
			col2: "feather falling 4",
		},
		{
			name: "Bowyer",
			imgUrl: "images/bowyer.png",
			Tooltip: "Stop breaking my bows you donkey! alt=the bowyer",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "stick31",
			col2: "emerald",
		},
		{
			col1: "string14",
			col2: "emerald",
		},
		{
			col1: "honey comb12",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "bow",
		},
		{
			col1: "emerald honey bottle",
			col2: "power 5",
		},
		{
			col1: "emerald honey bottle",
			col2: "infinity",
		},
		{
			col1: "emerald honey bottle",
			col2: "punch2",
		},
		{
			name: "Candle Maker",
			imgUrl: "images/candle_maker.png",
			Tooltip: "Some of these are made of my ear wax hehe",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald3",
			col2: "candle",
		},
		{
			name: "Cook",
			imgUrl: "images/cook.png",
			Tooltip: "Ya like meat? I got meat. Grab some and beat it! alt=a cook",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "cooked chicken",
		},
		{
			col1: "emerald",
			col2: "cooked mutton",
		},
		{
			col1: "emerald",
			col2: "cooked porkchop",
		},
		{
			col1: "emerald",
			col2: "cooked rabbit",
		},
		{
			col1: "emerald",
			col2: "steak",
		},
		{
			name: "Crossbow Engineer",
			imgUrl: "images/crossbow_engineer.png",
			Tooltip: "Want some REAL accuracy?",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "stick",
			col2: "emerald",
		},
		{
			col1: "iron ingot",
			col2: "emerald",
		},
		{
			col1: "String",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "crossbow",
		},
		{
			col1: "emerald copper ingot",
			col2: "Piercing 4",
		},
		{
			col1: "emerald copper ingot",
			col2: "multishot",
		},
		{
			col1: "emerald copper ingot",
			col2: "quick charge 3",
		},
		{
			name: "Dock Worker",
			imgUrl: "images/dock_worker.png",
			Tooltip: "the dock worker",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "pufferfish",
			col2: "emerald",
		},
		{
			col1: "spruce boat",
			col2: "emerald",
		},
		{
			name: "Farmer",
			imgUrl: "images/farmer.png",
			Tooltip: "a farmer",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "potato",
			col2: "emerald",
		},
		{
			col1: "carrot",
			col2: "emerald",
		},
		{
			col1: "beetroot",
			col2: "emerald",
		},
		{
			col1: "melon block",
			col2: "emerald",
		},
		{
			col1: "pumpkin block",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "melon seeds",
		},
		{
			col1: "emerald",
			col2: "pumpkin seeds",
		},
		{
			col1: "emerald",
			col2: "golden carrot",
		},
		{
			name: "Fisherman",
			imgUrl: "images/fisherman.png",
			Tooltip: "a fisherman",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "raw cod",
			col2: "emerald",
		},
		{
			col1: "raw salmon",
			col2: "emerald",
		},
		{
			col1: "tropical fish",
			col2: "emerald",
		},
		{
			col1: "pufferfish",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "cooked cod",
		},
		{
			col1: "emerald",
			col2: "cooked salmon",
		},
		{
			col1: "emerald",
			col2: "fishing rod Luck of the Sea 1, Lure 1, Unbreaking 1",
		},
		{
			name: "Fletcher",
			imgUrl: "images/fletcher.png",
			Tooltip: "a fletcher",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "arrow",
		},
		{
			col1: "emerald arrow",
			col2: "Iinvisibility  arrow",
		},
		{
			col1: "emerald arrow",
			col2: "arrow of slowness",
		},
		{
			col1: "emerald arrow",
			col2: "night vision  arrow",
		},
		{
			col1: "emerald arrow",
			col2: "poison  arrow",
		},
		{
			col1: "emerald arrow",
			col2: "jump  arrow",
		},
		{
			col1: "emerald arrow",
			col2: "feather falling arrow",
		},
		{
			col1: "emerald arrow",
			col2: "fire resist arrow",
		},
		{
			col1: "emerald arrow",
			col2: "instant heal 2 arrow",
		},
		{
			col1: "emerald arrow",
			col2: "arrow of harming",
		},
		{
			name: "Florists",
			imgUrl: ["images/florist.png", "images/florist2.png"],
			Tooltip: ["a florist", "the other florist"],
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "oxeye daisy",
		},
		{
			col1: "emerald",
			col2: "lily of the valley",
		},
		{
			col1: "emerald",
			col2: "azure bluet",
		},
		{
			col1: "emerald",
			col2: "cornflower",
		},
		{
			col1: "emerald",
			col2: "blue orchid",
		},
		{
			col1: "emerald",
			col2: "allium",
		},
		{
			col1: "emerald",
			col2: "dandelion",
		},
		{
			col1: "emerald",
			col2: "poppy",
		},
		{
			col1: "emerald",
			col2: "white tulip",
		},
		{
			col1: "emerald",
			col2: "pink tulip",
		},
		{
			col1: "emerald",
			col2: "orange tulip",
		},
		{
			col1: "emerald",
			col2: "red tulip",
		},
		{
			col1: "quest nugget",
			col2: "wither rose",
		},
		{
			name: "Glass Blower",
			imgUrl: "images/glass_blower.png",
			Tooltip: "the glass blower",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "sand",
			col2: "emerald",
		},
		{
			col1: "amethyst shard",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "glass",
		},
		{
			col1: "emerald",
			col2: "tinted glass",
		},
		{
			col1: "emerald3",
			col2: "spyglass",
		},
		{
			name: "Head Smith",
			imgUrl: "images/head_smith.png",
			Tooltip: "the head honcho smith daddy",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "coal",
			col2: "emerald",
		},
		{
			col1: "charcoal",
			col2: "emerald",
		},
		{
			col1: "iron ingot",
			col2: "emerald",
		},
		{
			col1: "gold ingot",
			col2: "emerald",
		},
		{
			col1: " amethyst shard",
			col2: "emerald",
		},
		{
			col1: "diamond",
			col2: "emerald3",
		},
		{
			col1: "netherite ingot",
			col2: "emerald48",
		},
		{
			col1: "emerald questnugget",
			col2: "mending",
		},
		{
			col1: "emerald questnugget",
			col2: "unbreaking3",
		},
		{
			name: "Helm Polisher",
			imgUrl: "images/helm_polisher.png",
			Tooltip: "the helmet polisher",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald5",
			col2: "chain helm",
		},
		{
			col1: "emerald5",
			col2: "gold helm",
		},
		{
			col1: "emerald",
			col2: "iron helm",
		},
		{
			col1: "emerald40",
			col2: "diamond helm",
		},
		{
			col1: "emerald questnugget",
			col2: "Aqua affinity",
		},
		{
			col1: "emerald questnugget",
			col2: "Respiration 3",
		},
		{
			name: "Horse Master",
			imgUrl: "images/horse_master.png",
			Tooltip: "horse guy",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "leather",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "Lead",
		},
		{
			col1: "emerald",
			col2: "saddle",
		},
		{
			col1: "emerald",
			col2: "leather horse armor",
		},
		{
			col1: "emerald",
			col2: "iron horse farm",
		},
		{
			col1: "emerald",
			col2: "gold horse armor",
		},
		{
			col1: "emerald",
			col2: "diamond horse armor",
		},
		{
			name: "Ice Importer",
			imgUrl: "images/ice_importer.png",
			Tooltip: "ice importer",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "ice",
		},
		{
			col1: "emerald8",
			col2: "packed ice",
		},
		{
			col1: "emerald clock",
			col2: "blue ice",
		},
		{
			name: "Innkeeper",
			imgUrl: "images/innkeeper.png",
			Tooltip: "the innkeeper",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "beds",
		},
		{
			name: "Joe",
			imgUrl: "images/joe.png",
			Tooltip: "joe. just joe.",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "raw chicken",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "rabbit stew",
		},
		{
			name: "Lumberjack",
			imgUrl: "images/lumberjack.png",
			Tooltip: "he's a lumberjack and he's ok",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "birch log",
		},
		{
			col1: "emerald",
			col2: "acacia log",
		},
		{
			col1: "emerald",
			col2: "oak log",
		},
		{
			col1: "emerald",
			col2: "jungle log",
		},
		{
			col1: "emerald",
			col2: "spruce log",
		},
		{
			col1: "emerald",
			col2: "dark oak log",
		},
		{
			col1: "emerald",
			col2: "Stem Block",
		},
		{
			col1: "emerald",
			col2: "Stem Block2",
		},
		{
			col1: "emerald",
			col2: "shroomlight",
		},
		{
			name: "Mayor",
			imgUrl: "images/mayor.png",
			Tooltip: "the stingy mayor",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald clock diamond block",
			col2: "Deed, it's worthless.",
		},
		{
			name: "Old Bob & Old Fisherman",
			imgUrl: ["images/old_bob.png", "images/old_fisherman.png"],
			Tooltip: ["old bob", "the old fisherman"],
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "fishing rod",
		},
		{
			col1: "emerald fishing rod Luck of the Sea 1, Lure1, unbreaking1",
			col2: "fishing rod Luck of the Sea 1, Lure3, unbreaking3",
		},
		{
			col1: "emerald tropical fish",
			col2: "Luck of the Sea 3",
		},
		{
			col1: "emerald tropical fish",
			col2: "Lure 3",
		},
		{
			name: "Preacher",
			imgUrl: "images/preacher.png",
			Tooltip: "the questionable preacher",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "Holy Water",
		},
		{
			col1: "emerald quest nugget",
			col2: "Tot'ressurection totem'",
		},
		{
			name: "Pyromancer",
			imgUrl: "images/pyromancer.png",
			Tooltip: "the overzealous pyromancer",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "firecharge",
		},
		{
			col1: "emerald",
			col2: "flint and steel fire aspect 5, unbreaking 10",
		},
		{
			col1: "emeraldblaze powder",
			col2: "fire aspect 2",
		},
		{
			col1: "emerald blaze powder",
			col2: "flame 1",
		},
		{
			name: "Quest Bartender",
			imgUrl: "images/quest_bartender.png",
			Tooltip: "the guild quest bartender",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald quest nugget",
			col2: "night vision potion",
		},
		{
			col1: "emerald quest nugget",
			col2: " water breathing potion",
		},
		{
			col1: "emerald quest nugget",
			col2: "potion of invisibility",
		},
		{
			col1: "emerald quest nugget",
			col2: "strength potion",
		},
		{
			col1: "emerald quest nugget",
			col2: " fire resist potion",
		},
		{
			col1: "emerald quest nugget",
			col2: " instant health potion",
		},
		{
			col1: "emerald quest nugget",
			col2: "strength 2 potion",
		},
		{
			col1: "quest nugget5",
			col2: "Adventurers Key",
		},
		{
			name: "Rancher",
			imgUrl: "images/rancher.png",
			Tooltip: "the rancher",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "beef",
		},
		{
			col1: "emerald",
			col2: "raw chicken",
		},
		{
			col1: "emerald",
			col2: "raw mutton",
		},
		{
			col1: "emerald",
			col2: "porkchop",
		},
		{
			col1: "emerald",
			col2: "raw rabbit",
		},
		{
			name: "Retiarius Fighter",
			imgUrl: "images/retiarius_fighter.png",
			Tooltip: "the aqua man on land",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "kelp",
			col2: "emerald",
		},
		{
			col1: "emerald questnugget",
			col2: "impaling 5",
		},
		{
			col1: "emerald questnugget",
			col2: "loyalty 3",
		},
		{
			col1: "emerald questnugget",
			col2: "channeling",
		},
		{
			col1: "emerald questnugget",
			col2: "riptide3",
		},
		{
			name: "Saucier",
			imgUrl: "images/saucier.png",
			Tooltip: "the sauce man",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "beetroot soup",
		},
		{
			col1: "emerald",
			col2: "mushroom stew",
		},
		{
			col1: "emerald",
			col2: "rabbit stew",
		},
		{
			col1: "emerald",
			col2: "suspicious stew",
		},
		{
			name: "Spa Worker",
			imgUrl: "images/spa_worker.png",
			Tooltip: "spa worker",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "flowering azalea leaves",
			col2: "emerald",
		},
		{
			col1: "dried kelp block",
			col2: "emerald",
		},
		{
			col1: "bamboo",
			col2: "emerald",
		},
		{
			name: "Swordswolf",
			imgUrl: "images/swordswolf.png",
			Tooltip: "wolf with a sword",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald",
			col2: "iron sword",
		},
		{
			col1: "emerald",
			col2: "diamond sword",
		},
		{
			col1: "emerald questnugget",
			col2: "bane of arthropods 5",
		},
		{
			col1: "emerald questnugget",
			col2: "smite 5",
		},
		{
			col1: "emerald questnugget",
			col2: "looting 3",
		},
		{
			col1: "emerald questnugget",
			col2: "sweeping edge 3",
		},
		{
			col1: "emerald questnugget",
			col2: "knockback 2",
		},
		{
			name: "The Unrefiner",
			imgUrl: "images/The_Unrefiner.png",
			Tooltip: "don't care for mining? i'll unrefine your bars... for a cut.",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "Iron ingot",
			col2: "Raw Iron",
		},
		{
			col1: "Iron block",
			col2: "Block of raw iron",
		},
		{
			col1: "Copper ingot",
			col2: "Raw Copper",
		},
		{
			col1: "Copper block",
			col2: "Block of raw copper",
		},
		{
			col1: "Gold ingot",
			col2: "Raw Gold",
		},
		{
			col1: "Gold block",
			col2: "Block of raw Gold",
		},
		{
			name: "Tool Enchanter",
			imgUrl: "images/tool_enchanter.png",
			Tooltip: "the tool enchanter",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald questnugget",
			col2: "efficiency 5",
		},
		{
			col1: "emerald questnugget",
			col2: "fortune 3",
		},
		{
			col1: "emerald questnugget",
			col2: "silk touch",
		},
		{
			name: "Tool Smith",
			imgUrl: "images/tool_smith.png",
			Tooltip: "the tool smith",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "emerald3",
			col2: "iron pick",
		},
		{
			col1: "emerald3",
			col2: "iron shovel",
		},
		{
			col1: "emerald3",
			col2: "iron axe",
		},
		{
			col1: "emerald",
			col2: "iron hoe",
		},
		{
			col1: "emerald",
			col2: "diamond pick",
		},
		{
			col1: "emerald",
			col2: "diamond axe",
		},
		{
			col1: "emerald",
			col2: "diamond shovel",
		},
		{
			col1: "emerald",
			col2: "diamond hoe",
		},
		{
			name: "Travelling Gatherer",
			imgUrl: "images/travelling_gatherer.png",
			Tooltip: "the travelling gatherer fox",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "dirt",
			col2: "rooted dirt",
		},
		{
			col1: "grass diamond",
			col2: "moss",
		},
		{
			col1: "emerald oak sapling",
			col2: "azalea",
		},
		{
			col1: "emerald oak sapling",
			col2: "flowering azalea",
		},
		{
			col1: "emerald vines",
			col2: "glow lichen",
		},
		{
			col1: "emerald lilypad",
			col2: "sdripleaf plant",
		},
		{
			col1: "emerald clock",
			col2: "sporeblossom",
		},
		{
			name: "Vinny The Unkillable",
			imgUrl: "images/vinny_the_unkillable.png",
			Tooltip: "vinny the unkillable",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "arrow quest nugget",
			col2: "Harrow of harming",
		},
		{
			col1: "emerald quest nugget",
			col2: "iron axe efficiency 5, sharpness 5, unbreaking 3",
		},
		{
			col1: "emerald quest nugget",
			col2: "crossbow",
		},
		{
			col1: "emerald64 quest nugget20",
			col2: "totem of undying",
		},
		{
			name: "Warehouse Worker",
			imgUrl: "images/warehouse_worker.png",
			Tooltip: "a warehouse worker",
			trades: {
				wants: [],
				gives: [],
			},
		},
		{
			col1: "tone",
			col2: "emerald",
		},
		{
			col1: "andesite",
			col2: "emerald",
		},
		{
			col1: "diorite",
			col2: "emerald",
		},
		{
			col1: "granite",
			col2: "emerald",
		},
		{
			col1: "emerald",
			col2: "sand",
		},
		{
			col1: "emerald",
			col2: "red sand",
		},
		{
			col1: "emerald",
			col2: "gravel",
		},
		{
			col1: "emerald",
			col2: "clay",
		},
		{
			col1: "emerald",
			col2: "terracotta",
		},
	];

	tableobj.map((trader, index) => {
		if (trader.name) {
			tableData = [...tableData, trader];
		}
	});

	//Add gives
	let j = 0;
	let g = 0;
	for (let i = 1; i < tableobj.length; i++) {
		let temp = { itemName: null };
		if (tableobj[i].name) {
			j++;
			g = 0;
		} else if (tableobj[i].col1) {
			temp.itemName = tableobj[i].col1;
			tableData[j].trades.gives[g] = temp;
			g++;
		}
	}
	j = 0;
	g = 0;
	for (let i = 1; i < tableobj.length; i++) {
		let temp = { itemName: null };
		if (tableobj[i].name) {
			j++;
			g = 0;
		} else if (tableobj[i].col2) {
			temp.itemName = tableobj[i].col2;
			tableData[j].trades.wants[g] = temp;
			g++;
		}
	}

	console.log(tableData);

	const addAll = () => {
		tableData.map((trader, index) => {
			axios
				.post("http://localhost:8000/api/traders/create", trader)
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => console.log(err));
		});
	};

	// useEffect(() => {
	// 	addAll();
	// }, []);

	return <></>;
};

export default TableInput;
