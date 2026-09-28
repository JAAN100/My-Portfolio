import { Float } from "@react-three/drei";

// Floating procedural "stations" along the camera path — monitors, rings, and
// polyhedra that evoke a developer workspace in space. No external model files.
const CYAN = "#06B6D4";
const COBALT = "#3B82F6";

function Monitor({ position, rotation = [0, 0, 0], color = CYAN }) {
    return (
        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
            <group position={position} rotation={rotation}>
                <mesh>
                    <boxGeometry args={[3, 1.8, 0.08]} />
                    <meshStandardMaterial color="#0b1220" emissive={color} emissiveIntensity={0.18} metalness={0.7} roughness={0.3} />
                </mesh>
                <mesh position={[0, 0, 0.05]}>
                    <planeGeometry args={[2.8, 1.6]} />
                    <meshBasicMaterial color={color} transparent opacity={0.07} />
                </mesh>
            </group>
        </Float>
    );
}

function Ring({ position, color = COBALT, scale = 1 }) {
    return (
        <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.4}>
            <mesh position={position} scale={scale}>
                <torusGeometry args={[1.4, 0.03, 16, 80]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
            </mesh>
        </Float>
    );
}

function Poly({ position, color = CYAN }) {
    return (
        <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.6}>
            <mesh position={position}>
                <octahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} wireframe />
            </mesh>
        </Float>
    );
}

// Station clusters distributed along the camera path (z axis).
const STATIONS = [
    {
        z: -60, items: [
            <Poly key="p5" position={[-3, 0.8, 0]} />,
            <Ring key="r4" position={[3, -0.5, -1]} scale={0.8} color={COBALT} />,
            <Monitor key="m6" position={[0, -1.5, -2]} color={COBALT} />,
        ]
    },
];

export default function AmbientShapes({ perfTier }) {
    // On low-power devices, drop the last station's shapes to reduce draw calls.
    const stations = perfTier === "low" ? STATIONS.slice(0, 4) : STATIONS;

    return (
        <group>
            {stations.map((s, i) => (
                <group key={i} position={[0, 0, s.z]}>
                    {s.items}
                </group>
            ))}
        </group>
    );
}