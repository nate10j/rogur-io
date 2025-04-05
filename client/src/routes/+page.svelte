<script>
import { onMount } from "svelte";
import { init, render } from "$lib/render";
import { start, stop } from "$lib/player";

let canvas;

onMount(() => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	init(canvas);
	start()
})

</script>


<div class="ui">
	<h1>Rogur</h1>
</div>
<canvas class="canvas" bind:this={canvas}>
</canvas>

<style>
.ui {
	position: fixed;
	z-index: 1;
}

.canvas {
	overflow: hidden;
	position: fixed;
}
</style>
