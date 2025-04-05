<script>
import { onMount } from "svelte";
import { init, render } from "$lib/render";

let canvas;

onMount(() => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init(canvas);

	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});

	render();
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
