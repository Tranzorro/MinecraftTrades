# MinecraftTrades
wiki like trades page for a minecraft server i play on.

one page listing of tables containing EVERY custom villager trade from the private minecraft servers spawn hub.
on the left is a navbar containing links that when clicked, take you directly to that traders info by scrolling the page to it.
on the right hand side is the tables with each villager with related info.

the intended layout is that the site is bordered with a nice peach/orange color
the navbar is a dark black/grey, the text matches the border color.
the villager tables all sit overtop of a grey backdrop
each table of villagers should have an image on top, their name below the image, and the table containing all their trades below that
each trade table should expand easily with any new update.
on the left of the trade trable, is what the trader wants
on the right side of the table is what the trader will give the player.
when you mouseover each item, it will show a tooltip containing detailed information about that specific item (resembles in game tooltips.)
each enchanted item should have the enchanted item effect overlayed on it. (is it a special added effect, or is it built into the item image itself, this means many unique versions of enchanted and unenchanted tools/armors)
images supplied locally, or from online links (online links may be helpful.)
refactor the current version from pure html and css to be modular.
use react to have components, the table will be its own component, the tooltip will be its own component, the navbar will be its own component.
find a way to make setting up the tables info more simplified. (there is no private read only server api to use, so all updates must be done by hand. plan for this.)
pick between having the right hand side of the screen be its own component that updates with usestate, or if it will stay as a scrollable long screen. (might be friendlier on most devices if the component only loads the trader being viewed, and not EVERY single one.)
attempt to use bootstrap to simplify styling the page better.
viewable on github here! https://tranzorro.github.io/MinecraftTrades/
