import Experience from './Experience/Experience.js'

export default class Application
{
    constructor()
    {
        this.setBlocks()
        this.setExperience()
    }

    setBlocks()
    {
        this.blocks = {}
        this.blocks.layout = window.location.hash ? window.location.hash.replace(/^#/, '') : '1-screen'
        this.blocks.$element = document.querySelector('.blocks')
        this.blocks.$element.classList.add(`is-${this.blocks.layout}`)
        this.blocks.$element.classList.add('is-visible')

        console.log(this.blocks.$element)
    }

    setExperience()
    {
        this.experience = new Experience({
            targetElement: document.querySelector('.experience')
        })
    }
}