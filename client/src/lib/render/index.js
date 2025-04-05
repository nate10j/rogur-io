import { background } from "./background.js"

let gl;

export function init(canvas) {
	gl = canvas.getContext("webgl");
	console.log("started rendering");
}

export function render() {
	// If failed, inform user of failure. Otherwise, initialize
	// the drawing buffer (the viewport) and clear the context
	// with a solid color.
	if (!gl) {
		return;
	}

	background(gl);
}
