precision highp float; 
uniform float uTime;
varying float vElevation;
varying vec2 vUv;
uniform sampler2D uTexture;

void main() {

    vec4 flag = texture2D(uTexture, vUv );
    flag.rgb *=   vElevation * 2.0 + 1.0;

    gl_FragColor = vec4(flag) ;
}