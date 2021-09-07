uniform float uTime;
uniform vec3 uEndColor;
uniform float uSaturation;
uniform float uLightness;

varying vec2 vUv;

vec3 hslToRgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float random2d(vec2 n)
{ 
	return fract(sin(dot(n, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main()
{
    vec3 startColor = hslToRgb(vec3(uTime * 0.00002, uSaturation, uLightness));
    vec3 endColor = uEndColor;
    vec3 finalColor = mix(startColor, endColor, vUv.y);

    // finalColor += random2d(vUv) * 0.05;

    gl_FragColor = vec4(finalColor, 1.0);
}