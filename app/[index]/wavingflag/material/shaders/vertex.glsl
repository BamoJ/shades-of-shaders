
uniform float uTime;  
uniform vec2 uFreq;
varying vec2 vUv;
varying float vElevation;
 

void main()
{ 
    vec3 pos = position;  

    float elevation = sin( pos.x * uFreq.x - uTime * 1.5 ) * 0.1;
    elevation += sin( pos.y * uFreq.y + uTime * 1.5 ) * 0.1;

    pos.z +=  elevation;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( pos, 1.0 );
    
    vUv = uv;
    vElevation = elevation;
 
}