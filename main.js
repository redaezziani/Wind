const timeLine=gsap.timeline({
    defaults:{
        ease:"ease",
        duration:0.2
    }
})
const timeLine2=gsap.timeline({
    defaults:{
        ease:"linear",
        duration:0.2
    }
})

const MenuBtn=document.getElementById('menu-btn')
const MenuBtnIcon=document.getElementById('menu-btn-icon')
const MenuList=document.querySelector('.list-links')

const ShowMenu=()=>{
    if(MenuList.classList.contains('active')){
        MenuList.classList.remove('active')
        MenuBtnIcon.classList.replace('la-close','bx-menu')
        MenuBtnIcon.classList.replace('la','bx')
    }
    else{
        MenuList.classList.add('active')
        MenuBtnIcon.classList.replace('bx-menu','la-close')
        MenuBtnIcon.classList.replace('bx','la')
    }
}

const OpenAnimation=()=>{
    timeLine.from('.nav-logo',{
        scale:0.2,
        blur:4,
        duration:0.4
    })
    if(!MenuList.classList.contains('active')){
        timeLine.from('.link4',{
            x:-100,
            duration:0.3,
            opacity:0
        })
        timeLine.from('.link3',{
            x:-100,
            duration:0.3,
            opacity:0
        })
        timeLine.from('.link2',{
            x:-100,
            duration:0.3,
            opacity:0
        })
        timeLine.from('.link1',{
            x:-100,
            duration:0.3,
            opacity:0
        })
    }
    timeLine.from('.hero .info .title',{
        scale:0,
        duration:0.5,
        opacity:0
    })
    timeLine.from('.hero .info .text',{
        scale:0,
        duration:0.5,
        opacity:0
    })
    timeLine.from('.hero .info .install',{
        scale:0,
        duration:0.5,
        opacity:0
    })
    timeLine.from('.hero .info .video',{
        scale:0,
        duration:0.5,
        opacity:0
    })
    timeLine.from('.hero  .container1',{
        scale:0,
        duration:0.3,
        opacity:0
    })
    timeLine.from('.hero  .container2',{
        scale:0,
        duration:0.3,
        opacity:0
    })
    timeLine.from('.hero  .container3',{
        scale:0,
        duration:0.3,
        opacity:0
    })
    timeLine.from(' .date',{
        scale:0,
        duration:0.3,
        opacity:0
    })
    timeLine.from('  .acounts',{
        scale:0,
        duration:0.3,
        opacity:0
    })


}
OpenAnimation()
MenuBtn.addEventListener('click',ShowMenu)