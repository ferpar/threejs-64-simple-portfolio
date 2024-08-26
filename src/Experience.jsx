import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF("/macbook_model.gltf");
  return (
    <>
      <Environment preset="city" />

      <color args={["#201b1b"]} attach="background" />

      <PresentationControls 
        global
        rotation={ [0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{mass: 2, rension: 400}}
        // snap={{ mas: 4, tension: 400}}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5} 
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={ [0.1, Math.PI, 0]}
            position={ [0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html 
              transform 
              center
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={ -0.256}
            >
              <iframe src="https://agilizaseller.com" />
            </Html>
          </primitive>
          <Text 
            font="./bangers-v20-latin-regular.woff"
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={ 2}
          >
            Port folio</Text>     
        </Float>
      </PresentationControls>

      <ContactShadows 
        rotation-x={Math.PI / 2} 
        position={[0, -1.4, 0]} 
        opacity={0.4}
        scale={5}
        />
    </>
  );
}
