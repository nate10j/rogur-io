import { render } from "$lib/render";

let isGameRunning;

export function start() {
	isGameRunning = true;
}

export function stop() {
	isGameRunning = false;
}

export function loop() {
	if (!isGameRunning) return;

	render();
	requestAnimationFrame(loop);
}
