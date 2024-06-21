/**
* @typedef {Object.<string, SceneModel>} SceneModels
*/
/** 
* @typedef SceneModel 
* @prop {string} id
* @prop {CommonState} commonState
* @prop {UniqueState} uniqueState
* @prop {string | null} areaTitle
* @prop {string | null} audio
* @prop {boolean} audioUpdate
* @prop {Basemats} basemats
* @prop {Fragments} fragments
* @prop {Interactables} overlayNodes
* @prop {Messages} messages
* @prop {Decisions} decisions
*/


// Primary

/** 
* @typedef CommonState 
* @prop {boolean} isDark
* @prop {boolean} isCurrentlyDark
* @prop {boolean} messagesConverted
* @prop {boolean} visited
* @prop {boolean} showSceneStartItems
*/

/**
* @typedef {Object.<string, any>} UniqueState
*/

/**
* @typedef {Object.<string, string>} Basemats
*/

/**
* @typedef {Object.<string, Fragment>} Fragments
*/
/** 
* @typedef Fragment 
* @prop {string} path  
* @prop {boolean} show       
*/

/**
* @typedef {Object.<string, Interactable>} Interactables
*/
/** 
* @typedef Interactable 
* @prop {string} id
* @prop {Array<number>} coords
* @prop {Contexts} contexts
*/
/** 
* @typedef Contexts 
* @prop {ContextualData} look
* @prop {ContextualData} move
* @prop {ContextualData} talk
* @prop {Object.<string, ContextualData} item
*/
/** 
* @typedef ContextualData 
* @prop {string | null} triggerScript
* @prop {string | null} triggerTarget
* @prop {string | null} swap
* @prop {boolean} show
* @prop {SoundEffect | null} soundEffect
* @prop {boolean} showInDark
* @prop {string | null} [linkedItemId]
*/



/**
* @typedef {Object.<string, Message | null>} Messages
*/
/** 
* @typedef Message 
* @prop {string | null} nextMessage
* @prop {string | null} triggerScript
* @prop {string | null} targetId
* @prop {string | null} swap
* @prop {Array<TextChunk>} textArray
* @prop {string | null} textString
* @prop {SoundEffect | null} soundEffect
*/

/**
* @typedef {Object.<string, Decision>} Decisions
*/
/** 
* @typedef Decision 
* @prop {string} decisionText
* @prop {Array<Button>} buttons
*/



// Secondary

/** 
* @typedef TextChunk 
* @prop {number} speed
* @prop {string} text
* @prop {Array<string>} classes
*/

/** 
* @typedef SoundEffect 
* @prop {string} path
* @prop {string} element
* @prop {boolean} playOnce
* @prop {boolean} waitForFinish
*/

/** 
* @typedef Button 
* @prop {string} buttonText
* @prop {string | null} triggerScript
* @prop {string | null} triggerTarget
* @prop {string | null} swap
* @prop {SoundEffect | null} soundEffect
*/