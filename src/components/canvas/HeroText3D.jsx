import { Text, Float } from "@react-three/drei";

// The hero "station": Hassan Jaan's name in 3D text with a gentle idle float.
// The name also exists as a visually-hidden <h1> in the HTML overlay for screen readers.
export default function HeroText3D() {
    return (
        <group position={[0, 0, 0]}>
            <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
                <Text
                    fontSize={0.18}
                    letterSpacing={0.18}
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.45, 0]}
                >
                    FULL-STACK · WEB DESIGN · IT
                    <meshBasicMaterial color="#94A3B8" toneMapped={false} />
                </Text>
            </Float>
        </group>
    );
}