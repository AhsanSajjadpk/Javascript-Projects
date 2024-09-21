// All Dom Elements

const disk = document.getElementById('disk')
const audio = document.getElementById('audio')
const progressContainer = document.getElementById('progress-container')
const progressBar = document.getElementById('progress-bar')
const playBtn = document.getElementById('play-pause')
const volumeBtn = document.getElementById('volume')




// All required variables




// All required functions


// function to play/pause audio

const playPause = () => {
    if (audio.paused) {
        audio.play()
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    else {
        audio.pause()
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }

    disk.classList.toggle('rotate')
}

// function to update volume

const updateVolume = () => {

    switch (audio.volume) {
        case 0:
            audio.volume = 0.5
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>'
            break;

        case 0.5:
            audio.volume = 1
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
            break;
        case 1:
            audio.volume = 0
            volumeBtn.innerHTML = '<i class="fa-solid fa-volume-off"></i>'
            break;

    }


}

// function to update progress Bar

const updateProgressBar = () => {
    const progress = (audio.currentTime / audio.duration) * 100
    progressBar.style.width = `${progress}%`

    if (audio.currentTime === audio.duration) {
        audio.currentTime = 0
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        audio.pause()
        if (disk.classList.contains('rotate')) {
            disk.classList.remove('rotate')
        }

    }

}

// function to update progress container

const adjustAudio = (e) => {

    // e.offsetX  -> this is x position in container where clicked
    // console.log(e.offsetX , progressContainer.clientWidth)
    audio.currentTime = (e.offsetX / progressContainer.clientWidth) * audio.duration;
    //    console.log(audio.currentTime)

}


// All event listeners

// To play/ pause audio

playBtn.addEventListener('click', playPause)

// To update volume

volumeBtn.addEventListener('click', updateVolume)

// To update progress Bar

audio.addEventListener('timeupdate', updateProgressBar)

// To update progress Container

progressContainer.addEventListener('click', adjustAudio)



// INIT
// console.log(audio.duration)
