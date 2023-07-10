let progress=document.getElementById("progress")
let song=document.getElementById("audio")
let ctrl=document.getElementById("cntrl")


song.onloadedmetadata=function(){
    progress.max=song.duration
    progress.value=song.currentTime;
}

function playpause(){
    if(ctrl.classList.contains("fa-pause")){
        song.pause();
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")
    }else{
        
        song.play()
        ctrl.classList.remove("fa-play")
        ctrl.classList.add("fa-pause")
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
}
progress.onchange=()=>{
    ctrl.classList.remove("fa-play")
        ctrl.classList.add("fa-pause")
    song.play();
    song.currentTime=progress.value
}
