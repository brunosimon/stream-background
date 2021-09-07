import Experience from './Experience.js'
import Gradient from './Gradient.js'
import Smoke from './Smoke.js'
import Particles from './Particles.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setGradient()
                // this.setSmoke()
                this.setParticles()
            }
        })
    }

    setGradient()
    {
        this.gradient = new Gradient()
    }

    setSmoke()
    {
        this.smoke = new Smoke()
    }

    setParticles()
    {
        this.particles = new Particles()
    }

    resize()
    {
    }

    update()
    {
        if(this.gradient)
            this.gradient.update()

        if(this.smoke)
            this.smoke.update()

        if(this.particles)
            this.particles.update()
    }

    destroy()
    {
    }
}