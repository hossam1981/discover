window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(audio)
    if (!audio) return // stop te function from running all together
    audio.currentTime = 0 // rewind to the start
    audio.play()
    key.classList.add('playing');

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return //ship if is not transform
        this.classList.remove('playing')

    }
    const keys = this.document.querySelectorAll('key')
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

})