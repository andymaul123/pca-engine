# https://mermaid.live/
# Copy/paste into live editor to view flowchart

# Visualization of inventory menu request/rendering v2

flowchart TD
start(Player clicks shrine)
route(routes/scenes/shrine/takecandle)
dm(req.app.locals.dungeonMaster.addItemsToInventory)
shrineScene(req.app.locals.dungeonMaster.sceneInstanceMap.shrine.takecandle)
player(playerInstance.addItemsToInventory)
ejs(template engine)

inventory(player opens inventory)
inventoryRoute(routes/player/inventory)
dm2(req.app.locals.dungeonMaster.getInventory)
getids(playerInstance.getInventory)
itemInstanceMap(does Item instance exist?)
createItemInstance(create Item instance)
getInstanceFromMap(get instance from map)
guiLogic(other logic for gui)
template(template engine)
endchart(end)



start -- get --> route
route --> dm & shrineScene
dm --> player
shrineScene -- sceneInstance --> ejs
ejs -- html --> start

inventory -- get --> inventoryRoute
inventoryRoute --> dm2
dm2 --> getids
getids -- ids --> dm2
dm2 -- ids --> itemInstanceMap
itemInstanceMap -- no --> createItemInstance
itemInstanceMap -- yes --> getInstanceFromMap
getInstanceFromMap & createItemInstance -- item instance --> guiLogic
guiLogic -- data --> template
template -- html --> endchart