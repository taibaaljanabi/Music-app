window.addEventListener('load' , () => {
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const colors = [
        "#60d394",
        "#d36060",
        "lightpink",
        "lightsalmon",
        "lightgreen",
       " purple"
    ]
    

    console.log(sounds[0])
    
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function (){
            sounds[index].currentTime = 0
            sounds[index].play()
            creatBubbles(index)
        })
       
    })
 const creatBubbles = (index)=>{
     const bubble = document.createElement('div')
     visual.appendChild(bubble)
     bubble.style.backgroundColor= colors[index]
     bubble.style.animation ='jump 1s ease'
     bubble.addEventListener('animationend', function (){
         visual.removeChild(this)
     })
 }
})
