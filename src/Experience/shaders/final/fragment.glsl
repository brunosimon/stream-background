varying vec2 vUv;

uniform sampler2D tDiffuse;

void main()
{
    vec4 color = texture2D(tDiffuse, vUv);
    gl_FragColor = color;
}