import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
} from "@react-three/drei";

import React from "react";

const Pages = [
  {
    title: "Resumé",
    link: "https://html-cv-lake.vercel.app/",
  },
  {
    title: "Agiliza",
    link: "https://agilizaseller.com",
  },
  {
    title: "D3+Framer",
    link: "https://react-d3-framer.vercel.app",
  },
];

export default function Experience() {
  const computer = useGLTF("/macbook_model.gltf");
  const handy = useGLTF("/handy_model.gltf");
  const [link, setLink] = React.useState("https://html-cv-lake.vercel.app/");
  const defaultMobile = window.innerWidth < 800;
  const [isMobile, setIsMobile] = React.useState(defaultMobile);
  const updateMobile = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const desktopRotation = [0.13, 0.1, 0];
  const mobileRotation = [-0.05, 0, 0];
  const decideRotation = () => (isMobile ? mobileRotation : desktopRotation);

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
        rotation={decideRotation()}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {isMobile ? (
            <group position={[-0.75, -1.2, 0.4]}>
              <primitive object={handy.scene} position={[0, 0, 0]}>
                <Html
                  transform
                  prepend={true}
                  center
                  wrapperClass="htmlHandy"
                  distanceFactor={1.73}
                  position={[0.17, 1.32, 0.084]}
                >
                  <iframe src={link} />
                </Html>
              </primitive>
              <Html
                transform
                prepend={true}
                center
                wrapperClass="htmlMenu"
                distanceFactor={1.73}
                rotation-y={-1.25}
                position={[1.3, 2.5, 0.6]}
                style={{ color: "white" }}
              >
                <div className="menuWrapper">
                  <h1>Hi, Check my Work here!</h1>
                  <div className="projectList"
                  >
                    {Pages.map((page, index) => (
                      <button 
                      className="projectButton"
                      key={index} onClick={() => setLink(page.link)}>
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
              </Html>
            </group>
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
              <primitive object={computer.scene} position={[-0.8, -1.2, 1.5]}>
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
              <Html
                transform
                prepend={true}
                center
                wrapperClass="htmlMenu"
                distanceFactor={1.73}
                rotation-y={-1.25}
                position={[1.2, 1, 0.7]}
                style={{ color: "white" }}
              >
                <div className="menuWrapper">
                  <h1>Hi, Check my Work here!</h1>
                  <div className="projectList"
                  >
                    {Pages.map((page, index) => (
                      <button 
                      className="projectButton"
                      key={index} onClick={() => setLink(page.link)}>
                        {page.title}
                      </button>
                    ))}
                  </div>
                </div>
              </Html>
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
