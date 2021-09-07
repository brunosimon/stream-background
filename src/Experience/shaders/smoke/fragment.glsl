varying vec2 vUv;
uniform vec2 uSize;
uniform float uTime;

#pragma glslify: perlin3d = require('../partials/perlin3d.glsl')

void main()
{
    vec2 smokeUv = vUv * uSize * 0.01;

    // smokeUv.x += perlin3d(vec3(smokeUv * 0.2 + 23.45, 0.0)) * 6.0;

    // smokeUv.y /= 2.0;
    // smokeUv.y -= uTime * 0.0003;
    
    // smokeUv.y += perlin3d(vec3(smokeUv + 123.45, 0.0));

    float smokeStrength = perlin3d(vec3(smokeUv, uTime * 0.0002));
    smokeStrength *= pow(1.0 - vUv.y, 2.0);

    gl_FragColor = vec4(1.0, 1.0, 1.0, smokeStrength);
}