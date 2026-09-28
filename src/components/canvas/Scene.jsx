import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Starfield from "./Starfield";
import HeroText3D from "./HeroText3D";
import AmbientShapes from "./AmbientShapes";
import CanvasErrorBoundary from "./CanvasErrorBoundary";

// Drives the camera along a smooth path based on page scroll progress.
// In reduced-motion mode the camera stays fixed (no damping toward pointer).
function CameraRig({ reducedMotion, perfTier }) {
    const { camera } = useThree();
    const progress = useRef(0);
    const target = useRef(0);
    // Normalized pointer (-1..1) tracked globally so parallax works even though
    // the canvas wrapper is pointer-events-none (to keep HTML interactive).
    const pointer = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            target.current = max > 0 ? window.scrollY / max : 0;
        };
        const onMove = (e) => {
            pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("pointermove", onMove);
        };
    }, []);

    useFrame((_, delta) => {
        const d = Math.min(delta, 0.05); // clamp for tab-switch spikes
        progress.current = THREE.MathUtils.damp(progress.current, target.current, reducedMotion ? 10 : 4, d);
        const p = progress.current;

        // Camera travels from z=8 to z=-54; look target travels from 0 to -60.
        const z = THREE.MathUtils.lerp(8, -54, p);
        const lookZ = THREE.MathUtils.lerp(0, -60, p);

        const allowParallax = !reducedMotion && perfTier !== "low";
        const px = allowParallax ? pointer.current.x * 1.4 : 0;
        const py = allowParallax ? pointer.current.y * 0.9 : 0;

        camera.position.x = THREE.MathUtils.damp(camera.position.x, px, 3, d);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, py, 3, d);
        camera.position.z = THREE.MathUtils.damp(camera.position.z, z, 4, d);
        camera.lookAt(0, 0, lookZ);
    });

    return null;
}

export default function Scene({ reducedMotion, perfTier }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 55 }}
            dpr={[1, perfTier === "low" ? 1 : 1.75]}
            gl={{ antialias: perfTier !== "low", powerPreference: "high-performance", alpha: false }}
        >
            <color attach="background" args={["#020617"]} />
            <ambientLight intensity={0.45} />
            <pointLight position={[6, 4, 2]} color="#06B6D4" intensity={45} distance={50} />
            <pointLight position={[-6, -2, -12]} color="#3B82F6" intensity={35} distance={50} />
            <Suspense fallback={null}>
                <CanvasErrorBoundary>
                    <Starfield perfTier={perfTier} />
                    <HeroText3D />
                    <AmbientShapes perfTier={perfTier} />
                </CanvasErrorBoundary>
            </Suspense>
            <CameraRig reducedMotion={reducedMotion} perfTier={perfTier} />
        </Canvas>
    );
}