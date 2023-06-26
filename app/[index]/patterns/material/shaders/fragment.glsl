precision highp float; 
uniform float uTime; 
varying vec2 vUv; 

void main() {
 
    gl_FragColor = vec4(vUv, 0.0f, 1.0f) ;
}