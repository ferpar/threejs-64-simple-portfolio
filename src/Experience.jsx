import { useGLTF, OrbitControls } from '@react-three/drei'


export default function Experience()
{
    const computer = useGLTF('/macbook_model.gltf')
    console.log(computer)
    return <>

        <color args={ ['#695b5b']} attach="background" />

        <OrbitControls makeDefault />
        
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}