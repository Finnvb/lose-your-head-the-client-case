<script>
	export let uid;
</script>
<div>
<a href={uid}> <div class="btn"><img src="/Arrow.svg" alt="button" /></div></a>
</div>
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
		margin: 1rem;
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

		@media (max-width:40rem){
				.btn{
					position:relative;
				}
		}
</style>
