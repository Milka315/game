let btn = document.querySelector('.btn')
let txt = document.querySelector('p')
let input = document.querySelector('input')
let txth = document.querySelector('h1')
let rand = Math.round(Math.random() * 9) + 1
let priz = document.querySelector('a')
let sc = document.querySelector('.sc')
let main = document.querySelector('.main')
let scrim = document.querySelector('.scrim')



btn.onclick = () => {
    if(input.value == rand){
        priz.style.display = 'inline'
        txth.innerHTML = "Правильно!Получите приз"
    }
    else{
        btn.style.display = 'none'
        txth.innerHTML = "Неправильно. перезагрузите страницу"
    }
    txt.innerHTML = rand
}

sc.onclick = () => {
    main.style.display = 'none';
    scrim.style.display = 'block'

let audio = new Audio();
audio.src = 'odin.mp3';
audio.autoplay = true;

} 



// alert(Math.round(Math.random() * 9) + 1)