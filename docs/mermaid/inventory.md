# https://mermaid.live/
# Copy/paste into live editor to view flowchart

# Visualization of inventory menu request/rendering

flowchart TD
start(Inventory Button or 'I')
request(get /inventory)
partial(partial has all data)
render(screen is rendered)
js(client js controls show/hide)
close(Close or 'I' /deleteme)
start --> request
request --data--> partial
partial --> render
render --> js
js --> close