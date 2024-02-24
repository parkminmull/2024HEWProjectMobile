import { CameraControls, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { City } from "./City";

// DirectionalLight를 extend 함수를 사용하여 컴포넌트로 확장
extend({ DirectionalLight: THREE.DirectionalLight });

export const Experience = () => {
    const controls = useRef();

    const intro = async () => {
        controls.current.dolly(-200);
        controls.current.smoothTime = 1.3;
        controls.current.dolly(200, true);
    }

    useEffect(() => {
        intro();
    }, []);

    return (
      <>
        <CameraControls ref={controls} />
        <group rotation-y={degToRad(-90)} rotation-x={degToRad(-0)} position-x={-3} position-y={-2}>
          <City scale={0.19}/>
        </group>

        {/* DirectionalLight 컴포넌트 사용 */}
        <directionalLight
  castShadow
  intensity={1}
  position={[100, 100, 100]}
  shadow-camera-left={-100}
  shadow-camera-right={100}
  shadow-camera-top={100}
  shadow-camera-bottom={-100}
  shadow-camera-near={0.5}
  shadow-camera-far={500}
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
/>

        <Environment preset="city" />
      </>
    );
};
