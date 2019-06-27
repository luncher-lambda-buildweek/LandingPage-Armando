class Panel{
    constructor(panel){
        this.openBtn = panel.querySelector('.panel-btn-open')
        this.closeBtn = panel.querySelector('.panel-btn-close')
        this.panelContent = panel.querySelector(".panel-content")
        this.openBtn.addEventListener('click', () => this.togglePanel())
        this.closeBtn.addEventListener('click', () => this.togglePanel())
    }

    togglePanel(){
        this.panelContent.classList.toggle('toggle-on')
        this.closeBtn.classList.toggle('hide-btn')
        this.openBtn.classList.toggle('hide-btn')
        if (this.openBtn.classList.contains('hide-btn')){
        this.panelContent.setAttribute('style', 'display:flex', 'align-items:center', 'justify-content:space-evenly')
        }else{
            this.panelContent.style.display = 'none';
        }
    }
}

const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => new Panel(panel))

const inputs = document.querySelectorAll('input')
const message = document.querySelectorAll('textarea')

// increase size of forms when focused
inputs.forEach((input) => input.addEventListener('focus', (event) => {
    event.target.setAttribute('style', 'transform:scale(1.09)')
},true))

inputs.forEach((input) => input.addEventListener('blur', (event) => {
    event.target.setAttribute('style', 'transform:scale(1.00)')
},true))

message.forEach((message) => message.addEventListener('focus', (event) => {
    event.target.setAttribute('style', 'transform:scale(1.02)')
},true))

message.forEach((message) => message.addEventListener('blur', (event) => {
    event.target.setAttribute('style', 'transform:scale(1.00)')
},true))

let urlStr = document.location.href
let urlArr = urlStr.split('/')
let pageHREF = urlArr[urlArr.length-1]

if (pageHREF !== ''){
    let menuItems = document.querySelectorAll('.nav-link')
    for(let i = 0; i < menuItems.length; i++){
        let currentURL = (menuItems[i].getAttribute('href'))
            menuItems[i].classList.remove('active')
        if (currentURL === pageHREF){
            menuItems[i].classList.add('active')
        }
    }
}




