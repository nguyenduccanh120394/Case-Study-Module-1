let score = document.querySelector('.score span');
let holes = document.querySelectorAll('.hole');
let start_btn = document.querySelector('.buttons .start');
let stop_btn = document.querySelector('.buttons .stop');
const cursor = document.querySelector('.hammer img')
window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
})
window.addEventListener('click', () => {
    cursor.style.animation = 'none'
    setTimeout(() => {
        cursor.style.animation = ''
    }, 101)
})
start_btn.addEventListener('click', () => {
    start_btn.style.display = 'none'
    stop_btn.style.display = 'inline-block'
    function Start() {
    }
    let so = 20;
    function countDown() {
        so--
        if (so >= 0) {
            document.getElementById('time').innerHTML = so;
        } else {
            window.location.href ='CS_Module1_endGame.html';
            alert("Số điểm của bạn là " + points)
        }
        setTimeout(countDown, 1000);
    }
    countDown();
    let holee;
    let game = setInterval(function () {
        let ran = Math.floor(Math.random() * 6)
        holee = holes[ran]
        let set_img = document.createElement('img')
        set_img.setAttribute('src',
            '../Case_Study_Module_1/img/endgame.gif')
        set_img.setAttribute('width','100px')
        set_img.setAttribute('class','rat')
        holee.appendChild(set_img)
        setTimeout(function () {
            holee.removeChild(set_img)
        }, 600);
    }, 700)
    let points = 0;
    window.addEventListener('click', function (e) {
        if (e.target === holee) {
            score.innerText = ++points;
        }
    })

    stop_btn.addEventListener('click', function () {
        clearInterval(game)
        stop_btn.style.display = 'none'
        start_btn.style.display = 'inline-block'
        score.innerHTML = '0';
    })
})
