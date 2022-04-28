const fscreenbtn = document.querySelector('#changesize');
const shakebtn = document.querySelector('#shakebtn');
const video = document.querySelector('#vid')

fscreenbtn.addEventListener('click',()=>{
    if(video.classList.contains('half')){
        video.classList.remove('half');
        video.classList.add('full')
    }else{
        video.classList.add('half');
        video.classList.remove('full')
    }
})

shakebtn.addEventListener('click',()=>{
    if(!video.classList.contains('shake')){
        video.classList.add('shake');
        shakebtn.style.display = 'none'
        setTimeout(()=>{
            video.classList.remove('shake')
            shakebtn.style.display = 'block'
        },500)
    }
})
