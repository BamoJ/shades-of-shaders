precision highp float; 
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(sin(vUv) * 2.25, 0.85f, 1.0f);
}