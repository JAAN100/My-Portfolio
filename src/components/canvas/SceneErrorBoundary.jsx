import React from "react";

// Catches any error thrown by the 3D canvas (e.g. a three.js / R3F version
// mismatch or a GPU context loss) and falls back to the static gradient so the
// rest of the portfolio keeps working.
export default class SceneErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        // eslint-disable-next-line no-console
        console.error("3D scene failed to render — falling back to gradient:", error);
    }

    render() {
        if (this.state.hasError) {
            return <div className="fixed inset-0 -z-10 gradient-fallback" aria-hidden="true" />;
        }
        return this.props.children;
    }
}