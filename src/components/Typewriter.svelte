<script>
	export let delay = 2;
	export let classes = '';

	function typewriter(node, { speed = 50 }) {
		const text = node.textContent;
		const duration = text.length * speed;

		return {
			delay: delay * 1000,
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);

				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<p class={classes} in:typewriter><slot /></p>
