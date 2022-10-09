<script>
	export let uid;
</script>

<a href={uid}> <div class="btn"><img src="/Arrow.svg" alt="button" /></div></a>

<style>
	.btn {
		background-color: var(--redLight);
		width: 5em;
		height: 5em;
		border-radius: 50%;
		transition: 0.5s ease;
		padding: 1.25em;
		position: absolute;
		bottom: 0;
		left: 0;
		cursor: pointer;
		margin: 2rem;
		/* outline: 4px solid var(--red); */
	}

	.btn:hover {
		transform: translateY(-10px) scale(1.1);
	}

	.btn:hover img {
		transform: translateY(-10px);
	}

	.btn img {
		transition: 0.5s ease;
		width: 100%;
		height: 100%;
	}
</style>
