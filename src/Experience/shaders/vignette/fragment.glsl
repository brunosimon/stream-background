uniform vec3 uColor;
uniform float uOffset;
uniform float uMultiplier;

varying vec2 vUv;

void main()
{
    float alpha = length(vUv - 0.5);
    alpha += uOffset;
    alpha *= uMultiplier;

    gl_FragColor = vec4(uColor, alpha);
}