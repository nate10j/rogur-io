import { render } from "$lib/render";

let isGameRunning = false;

export function start() {
	isGameRunning = true;
	requestAnimationFrame(loop);
}

export function stop() {
	isGameRunning = false;
}

function loop() {
	if (!isGameRunning) return;

	render();
	requestAnimationFrame(loop);
}
