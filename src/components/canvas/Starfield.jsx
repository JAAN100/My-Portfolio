import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// A procedural starfield plus a subtle drifting particle cloud.
// Particle count scales down on low-power devices.
export default function Starfield({ perfTier }) {
    const count = perfTier === "low" ? 2500 : 6000;
    const cloudRef = useRef();

    // Build a spherical distribution of accent particles once.
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 20 + Math.random() * 60;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            arr[i * 3 + 2] = r * Math.cos(phi) - 20; // bias along the camera path
        }
        return arr;
    }, [count]);

    useFrame((_, delta) => {
        if (cloudRef.current) cloudRef.current.rotation.y += delta * 0.01;
    });

    return (
        <group>
            <Stars radius={90} depth={60} count={count} factor={4} saturation={0} fade speed={perfTier === "low" ? 0 : 0.4} />
            <points ref={cloudRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.06} color="#06B6D4" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
            </points>
        </group>
    );
}