/** 
* @typedef SoundEffect 
* @prop {string} path  
* @prop {string} element 
* @prop {boolean} playOnce 
* @prop {boolean} waitForFinish 
*/

/**
 * Takes a SoundEffect and plays an audio file
 * @param {SoundEffect} sound
 * @returns {Promise}
 */

export function playSound(sound) {
    const audio = new Audio(sound.path);
    audio.volume= 0.25;
    if(sound.waitForFinish) {
        return playAudio(audio);
    } else {
       return audio.play();
    }

}


/**
 * Plays an audio file and returns a promise that resolves when the audio *finishes*
 * This is different than normal audio.play() as they resolve a promise when the audio starts playing
 * @param {Audio} audio 
 * @returns {Promise}
 */

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    });
}