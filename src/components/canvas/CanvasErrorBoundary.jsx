import { Component } from "react";

// Error boundary that lives INSIDE the R3F <Canvas>. The Canvas creates its own
// React root, so an error boundary in the outer tree cannot catch errors thrown
// by 3D objects during instance creation. Rendering this boundary as a child of
// <Canvas> lets it catch those errors within R3F's reconciler and degrade to a
// blank canvas (the gradient/background behind shows through) instead of
// crashing the whole page.
export default class CanvasErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        // eslint-disable-next-line no-console
        console.error("3D scene failed to render:", error);
    }

    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}