<script>
let canvas;
</script>

<div class="container">
	<div class="content">
		<h1>Rush Hour</h1>

		<canvas width="600px" height="600px" bind:this={canvas}>
		</canvas>
	</div>
</div>

<style>
h1 {
	font-size: 3rem;
	padding: 1rem;
}

canvas {
	border: 1px solid;
}

.container {
	justify-content: center;
	display: flex;
}

.content {
	display: flex;
	flex-direction: column;
}
</style>
