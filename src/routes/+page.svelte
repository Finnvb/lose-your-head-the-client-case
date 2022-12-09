<script>
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	import * as prismicH from '@prismicio/helpers';
	export let data;

	const { document } = data;

	console.log(document)
</script>

<svelte:head>
	<title>Ilojo Bar</title>
</svelte:head>

<main>
	<header>
		
		
		<h1>Stories of the <br /> ILOJO BARRR</h1>

		<h2>Discover the stories of the <br /> demolished bar in Lagos</h2>
	</header>

	<div>
		<Button
			source={'goldplate2.png'}
			link={'overview'}
			linktext={'Discover Stories'}
			color={'#F3F3F3'}
			height={'7rem'}
		/>

		<img src="cdf-1950s.png" alt="Ilojo-bar" />
	</div>
</main>

<!-- <Footer /> -->
<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
	}

	h1,
	h2 {
		text-align: center;
	}

	h1 {
		font-size: 4rem;
	}

	h2 {
		font-size: 1.5rem;
		margin: 2rem 0;
	}

	div img {
		width: 450px;
		height: 100%;
		box-shadow: 0px 0px 20px 1px #000;
		border: 7px solid var(--red);
	}

	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		margin: 2rem 0;
	}

	@media (max-width: 40em) {
		div {
			flex-direction: column-reverse;
		}

		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		div img {
			margin-bottom: 2rem;
			width: 300px;
		}
	}
</style>
