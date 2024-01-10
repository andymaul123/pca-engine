/**
* @typedef {Object.<string, Item>} ItemsModel
*/

/** 
* @typedef Item 
* @prop {string} id  
* @prop {string} name  
* @prop {string} image  
* @prop {string} descriptionRules  
* @prop {string} descriptionFlavor 
* @prop {boolean} lightSource   
*/

/**
* @typedef InventoryGUI 
* @prop {Array<Item>} inventory  
* @prop {Array<Array<ItemDescriptionToggle>>} itemRowToggle 
* @prop {Array<ItemDescriptionToggle>} itemDescriptionToggle 
*/

/** 
* @typedef ItemDescriptionToggle 
* @prop {string} className  
* @prop {string} target 
*/