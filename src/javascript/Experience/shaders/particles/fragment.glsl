uniform sampler2D uMask;

varying float vAlpha;

void main()
{
    float maskStrength = texture2D(uMask, gl_PointCoord).r;
    gl_FragColor = vec4(1.0, 1.0, 1.0, maskStrength * vAlpha);
}