# https://mermaid.live/
# Copy/paste into live editor to view flowchart

# Visualization of how message-box & typewriter system works

flowchart TD
start(Click event)
get(hx-get /messages/:id)
router(router function)
data(import data)
template(partials/message-box)
mix(ejs combines partial and data)
return(res.render)
onload(hx-on load calls typewriter)
reveals(typewriter reveals characters in box)
start --> get
get --> router
router -- id --> data
data -- data --> router
router -- data --> template
template --> mix
mix -- html --> return
return --> onload
onload --> reveals