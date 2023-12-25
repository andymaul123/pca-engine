/**
 * Takes a soundObj and plays an audio file
 * @param {object} sound Sound object
 * @returns {Promise} Promise response
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
 * @returns {Promise} Promise response
 */

function playAudio(audio){
    return new Promise(res=>{
      audio.play()
      audio.onended = res
    });
}