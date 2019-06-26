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
        this.panelContent.setAttribute('style', 'display:flex', 'align-items:center', 'justify-content:space-between')
        }else{
            this.panelContent.style.display = 'none';
        }
    }
}

const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => new Panel(panel))
console.log(panels)