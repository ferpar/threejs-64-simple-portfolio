import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

import React from "react";

export default function Experience() {
  const computer = useGLTF("/macbook_model.gltf");
  const handy = useGLTF("/handy_model.gltf");
  const [link, setLink] = React.useState("https://html-cv-lake.vercel.app/");
  const [isMobile, setIsMobile] = React.useState(false);
  const updateMobile = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  return (
    <>
      <Environment preset="city" />

      <color args={["#201b1b"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, rension: 400 }}
        // snap={{ mass: 4, tension: 400}}
      >
        <Float rotationIntensity={0.4}>
          {isMobile ? (
            <primitive object={handy.scene} position={[0, -1.2, 0]} />
          ) : (
            <>
              <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color={"#ff6900"}
                rotation={[0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
              />
              <primitive object={computer.scene} position-y={-1.2}>
                <Html
                  transform
                  center
                  wrapperClass="htmlScreen"
                  distanceFactor={1.17}
                  position={[0, 1.56, -1.4]}
                  rotation-x={-0.256}
                >
                  <iframe src={link} />
                </Html>
              </primitive>
              <Text
                font="./Jura-VariableFont_wght.ttf"
                position={[2, 1, -0.5]}
                rotation-y={-1.25}
                maxWidth={2}
                fontSize={0.2}
                onClick={() => setLink("https://html-cv-lake.vercel.app/")}
              >
                Check Resumé
              </Text>
              <Text
                font="./Jura-VariableFont_wght.ttf"
                position={[2, 0.75, -0.5]}
                rotation-y={-1.25}
                maxWidth={2}
                fontSize={0.2}
                onClick={() => setLink("https://agilizaseller.com")}
              >
                Agiliza Landing
              </Text>
            </>
          )}
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
