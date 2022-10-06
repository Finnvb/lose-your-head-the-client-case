<script>
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	import * as prismicH from '@prismicio/helpers';
	export let data;

	const { document } = data;

	console.log(document);
</script>

<Header />

<main>
	{#each data.document as data}
		<section>
			<img class="window" src="test.svg" alt="test" />
			<div class="image-container">
				<img class="storyimage" src={data.data.storyimages[0].image1.url} alt="test" />

				
			</div>
			<h2>{@html prismicH.asHTML(data.data.storytitle)}</h2>

			<Button link={data.uid} linktext={'Discover'} height={'4rem'} />
		</section>
	{/each}
</main>

<!-- <Footer /> -->
<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		margin: 4rem 2rem;
		gap: 4rem;
	}

	section {
		/* text-align: center; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.image-container {
		
		position: absolute;
		width: 203px;
		height: 225px;
		/* background-color: aqua; */
		/* height: 200px; */
		
	}
	.window {
		position: relative;
		bottom: 0;
		right: 0;
		/* z-index: 100; */
	}

	.storyimage {
		width: 100%;
		height: 100%;
		/* position: absolute; */
		/* bottom: 0; */
		/* right: 0; */
		/* left: 0; */
	}

	/* img {
		height: 3rem;
	
		border-radius: 1rem;
	} */

	h2 {
		font-size: 1rem;
	}
</style>
