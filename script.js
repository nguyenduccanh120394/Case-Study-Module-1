let score = document.querySelector('.score span');
let holes = document.querySelectorAll('.hole');
let start_btn = document.querySelector('.buttons .start');
let stop_btn = document.querySelector('.buttons .stop');
start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none'
    stop_btn.style.display = 'inline-block'
function Start(){
}
    let holee;
    let game = setInterval(function (){
        let ran = Math.floor(Math.random() * 6)
        holee = holes[ran]
       let set_img = document.createElement('img')
        set_img.setAttribute('src',
            '../Module 1_Codegym/img/gopher.gif')
        set_img.setAttribute('width','100px')
        set_img.setAttribute('class', 'rat')
        holee.appendChild(set_img)
        setTimeout(function (){
            holee.removeChild(set_img)
        }, 600);
    }, 700)
    window.addEventListener('click',function (e){
        if (e.target === holee){
            score.innerText = ++points;}
    })
    let points = 0;
    stop_btn.addEventListener('click',function (){
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0';
    })
})