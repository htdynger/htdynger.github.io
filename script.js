
const DOMreplace = (DOMadd, DOMremove)=>{
    DOMremove.classList.add('none')
    DOMremove.classList.remove('flex')

    DOMadd.classList.add('flex')
    DOMadd.classList.remove('none')
}
const DOMadd = (e)=>{
    e.classList.add('flex')
    e.classList.remove('none')
}
const DOMremove = (e)=>{
    e.classList.add('none')
    e.classList.remove('flex')
}

const full = document.querySelector('.full')
full.addEventListener('click',()=>{
    full.requestFullscreen()
})




// фулскрин ахаххахахХАХХАВЫЪАХЫВЪХАВХЪЫЪ
const DOMall = document.querySelector('.html')
const DOMmenu = document.querySelector('.menu')
const DOMgame = document.querySelector('.game')

const DOMgameMain = document.querySelector('.game__main')

const DOMmenuButtonPlay = document.querySelector('.menu__main__button_play')

const DOMgameButtonTalk = document.querySelector('.game__footer__button_talk')
const DOMgameButtonDo = document.querySelector('.game__footer__button_do')
const DOMgameButtonSkin = document.querySelector('.game__footer__button_skin')

const DOMgameMenuTalk = document.querySelector('.game__menu-talk')
const DOMgameMenuDo = document.querySelector('.game__menu-do')
const DOMgameMenuSkin = document.querySelector('.game__menu-skin')

const DOMgameMenuTalkAnswers = Array.from(document.querySelectorAll('[class^="game__menu-talk__answer-"]'))
const DOMgameMenuDoAnswers = Array.from(document.querySelectorAll('[class^="game__menu-do__answer-"]'))
const DOMgameMenuSkinAnswers = Array.from(document.querySelectorAll('[class^="game__menu-skin__img-"]'))

const DOMgameMenuSkinButtonBack = document.querySelector('.game__menu-skin__button-back')



const audio0 = new Audio('audio/0.wav')
const audio1 = new Audio('audio/1.wav')
const audio2 = new Audio('audio/2.wav')
const audio3 = new Audio('audio/3.wav') 
const audioMusic = new Audio('audio/music.wav')
audioMusic.loop = true
audioMusic.volume = 0.1

let counter = 0

let frost = false

DOMgameMain.addEventListener('click',()=>{

    

    counter += 1
    if (DOMgameMain.style.backgroundImage != `url(img/skins/${selectedSkin}/0.webp)` && counter === 2 && frost == false) {
        DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
        
        counter = 0

    }
    
})


DOMall.addEventListener('click',()=>{
    DOMreplace(DOMmenu, DOMall)
    
}) // zaпуск меню))0)

DOMmenuButtonPlay.addEventListener('click',()=>{
    audioMusic.play()
    DOMreplace(DOMgame, DOMmenu)
    
}) // закрыите меню открытие game asdfghjkl


 






DOMgameButtonTalk.addEventListener('click',()=>{
    if (DOMgameMenuTalk.classList.replace('none','none') && DOMgameMenuDo.classList.replace('none','none') && DOMgameMenuSkin.classList.replace('none','none') && DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/0.webp")`){

        DOMadd(DOMgameMenuTalk)
    
        counter = 0

    }

})
DOMgameMenuTalkAnswers[0].addEventListener('click',()=>{
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/talk/0.webp)`
    setTimeout(()=>{
        
        if (DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/talk/0.webp")`) {
            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
            counter = 0
        }
        counter = 0
        
        
        
    },4000)
    
    DOMremove(DOMgameMenuTalk)
    counter = 0
    


    



    // СЮДА ДОБАВИТЬ СТРОЧКУ ТИПО ФОН ЗАМЕНИЛСЯ
})
DOMgameMenuTalkAnswers[1].addEventListener('click',()=>{
    DOMremove(DOMgameMenuTalk)
    counter = 0
    setTimeout(()=>{

        if (DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/talk/1.webp")`) {
            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
            counter = 0
        }
        
        counter = 0
        
    },4000)


    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/talk/1.webp)`
    // СЮДА ДОБАВИТЬ СТРОЧКУ ТИПО ФОН ЗАМЕНИЛСЯ

    
})
DOMgameMenuTalkAnswers[2].addEventListener('click',()=>{
    
    DOMremove(DOMgameMenuTalk)
    counter = 0

    setTimeout(()=>{

        

        if (DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/talk/2.webp")`) {

            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/talk/20.webp)`
            setTimeout(()=>{
                
                counter = 0
                DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
            },3000)
        }
        
        
    },3000)


    // СЮДА ДОБАВИТЬ СТРОЧКУ ТИПО ФОН ЗАМЕНИЛСЯ

    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/talk/2.webp)`
})
DOMgameMenuTalkAnswers[3].addEventListener('click',()=>{
    

    DOMremove(DOMgameMenuTalk)
    counter = 0
    setTimeout(()=>{

        if (DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/talk/3.webp")`) {
            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
            counter = 0
        }
        
        counter = 0
        
    },4000)



    
    // СЮДА ДОБАВИТЬ СТРОЧКУ ТИПО ФОН ЗАМЕНИЛСЯ

    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/talk/3.webp)`
})




DOMgameButtonDo.addEventListener('click',()=>{
   
    if (DOMgameMenuTalk.classList.replace('none','none') && DOMgameMenuDo.classList.replace('none','none') && DOMgameMenuSkin.classList.replace('none','none') && DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/0.webp")`){
        DOMadd(DOMgameMenuDo)
    
        counter = 0

    }

})
DOMgameMenuDoAnswers[0].addEventListener('click',()=>{
    DOMremove(DOMgameMenuDo)
    frost = true
    
    counter = 0
    // ЗДЕСТЬ СТРОЧКА ТИПА ФОН ИЗМЕНА
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/00.webp)`

    audio0.play()

    setTimeout(()=>{
        DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
        frost = false
    },2000)
})
DOMgameMenuDoAnswers[1].addEventListener('click',()=>{
    frost = true
    DOMremove(DOMgameMenuDo)
    
    counter = 0
    // ЗДЕСТЬ СТРОЧКА ТИПА ФОН ИЗМЕНА
     DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/10.webp)`

     setTimeout(()=>{
        DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/11.webp)`
        audio1.play()
        setTimeout(() => {
            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/12.webp)`

            

            setTimeout(()=>{
                DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
                frost = false
            },3000)
        }, 3000);
     }, 3000)
})
DOMgameMenuDoAnswers[2].addEventListener('click',()=>{
    DOMremove(DOMgameMenuDo)
    frost = true
    
    counter = 0
    // ЗДЕСТЬ СТРОЧКА ТИПА ФОН ИЗМЕНА
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/20.webp)`


    setTimeout(()=>{
        DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/21.webp)`
        audio2.play()

        setTimeout(()=>{
            DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
            frost = false
        },3000)
        
    }, 3000)
})
DOMgameMenuDoAnswers[3].addEventListener('click',()=>{
    DOMremove(DOMgameMenuDo)
    
    counter = 0
    // ЗДЕСТЬ СТРОЧКА ТИПА ФОН ИЗМЕНА
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/do/30.webp)`


    audio3.play()
        

    setTimeout(()=>{
        DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
        frost = false
    },4000)
        
    
})



DOMgameButtonSkin.addEventListener('click', ()=>{
    if (DOMgameMenuTalk.classList.replace('none','none') && DOMgameMenuDo.classList.replace('none','none') && DOMgameMenuSkin.classList.replace('none','none') && DOMgameMain.style.backgroundImage == `url("img/skins/${selectedSkin}/0.webp")`){
        DOMadd(DOMgameMenuSkin)
    
        counter = 0

    }
})

DOMgameMenuSkinAnswers[0].addEventListener('click',()=>{
    DOMgameMenuSkinAnswers.forEach(e => {
        e.classList.remove('select')
        e.classList.add('release')
    });
    DOMgameMenuSkinAnswers[0].classList.add('select')
    DOMgameMenuSkinAnswers[0].classList.remove('release')
    selectedSkin = 0
    localStorage.setItem('selectedSkin', selectedSkin)
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`


})
DOMgameMenuSkinAnswers[1].addEventListener('click',()=>{
    DOMgameMenuSkinAnswers.forEach(e => {
        e.classList.remove('select')
        e.classList.add('release')
    });
    DOMgameMenuSkinAnswers[1].classList.add('select')
    DOMgameMenuSkinAnswers[1].classList.remove('release')
    selectedSkin = 1
    localStorage.setItem('selectedSkin', selectedSkin)
    
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
})
DOMgameMenuSkinAnswers[2].addEventListener('click',()=>{
    DOMgameMenuSkinAnswers.forEach(e => {
        e.classList.remove('select')
        e.classList.add('release')
    });
    DOMgameMenuSkinAnswers[2].classList.add('select')
    DOMgameMenuSkinAnswers[2].classList.remove('release')
    selectedSkin = 2
    localStorage.setItem('selectedSkin', selectedSkin)
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
})
DOMgameMenuSkinAnswers[3].addEventListener('click',()=>{
    DOMgameMenuSkinAnswers.forEach(e => {
        e.classList.remove('select')
        e.classList.add('release')
    });
    DOMgameMenuSkinAnswers[3].classList.remove('release')
    DOMgameMenuSkinAnswers[3].classList.add('select')
    selectedSkin = 3
    localStorage.setItem('selectedSkin', selectedSkin)
    DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`
})


DOMgameMenuSkinButtonBack.addEventListener('click',()=>{
    DOMremove(DOMgameMenuSkin)
    
    
    counter = 0
})


// const asd = document.querySelector('.asd')
// asd.src = 'img/background/menu.webp' ЭТО ВОТ ТАК НАДО ДЕЛАТЬ ЕСЛИ ЧТО ПОН ИЛИ НЕ ПОН


let selectedSkin = 0

if (localStorage.getItem('selectedSkin')) {
	console.log('все оказалось созраненое')
	selectedSkin = localStorage.getItem('selectedSkin')
    DOMgameMenuSkinAnswers[selectedSkin].classList.remove('release')
    DOMgameMenuSkinAnswers[selectedSkin].classList.add('select')


	
} else {
	console.log('ниче не сохранилось')
	localStorage.setItem('selectedSkin', selectedSkin)
	selectedSkin = 0
}

DOMgameMain.style.backgroundImage = `url(img/skins/${selectedSkin}/0.webp)`



