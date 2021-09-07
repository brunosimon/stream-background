import * as THREE from 'three'
import Experience from './Experience'
import vertexShader from './shaders/gradient/vertex.glsl'
import fragmentShader from './shaders/gradient/fragment.glsl'

export default class Gradient
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'gradient'
            })
        }

        this.setGeometry()
        this.setColors()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.PlaneGeometry(2, 2, 1, 1)
    }

    setColors()
    {
        this.colors = {}

        this.colors.end = {}
        this.colors.end.value = '#1a2036'
        this.colors.end.instance = new THREE.Color(this.colors.end.value)

        if(this.debug)
        {
            this.debugFolder
                .addInput(
                    this.colors.end,
                    'value',
                    {
                        view: 'color'
                    }
                )
                .on('change', () =>
                {
                    this.colors.end.instance.set(this.colors.end.value)
                })
        }
    }

    setMaterial()
    {
        this.material = new THREE.ShaderMaterial({
            depthWrite: false,
            uniforms:
            {
                uTime: { value: 0 },
                uEndColor: { value: this.colors.end.instance },
                uSaturation: { value: 0.32 },
                uLightness: { value: 0.38 },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
        
        if(this.debug)
        {
            this.debugFolder
                .addInput(
                    this.material.uniforms.uSaturation,
                    'value',
                    { label: 'uSaturation', min: 0, max: 1 }
                )

            this.debugFolder
                .addInput(
                    this.material.uniforms.uLightness,
                    'value',
                    { label: 'uLightness', min: 0, max: 1 }
                )
        }
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    update()
    {
        this.material.uniforms.uTime.value = this.time.elapsed
    }
}
