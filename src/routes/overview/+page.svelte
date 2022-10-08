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

			<div class="image-container">
				<img class="storyimage"  src={data.data.storyimages[0].image1.url} alt="test" />
			</div>

			<div class="window">
				<img  src="window.svg" alt="window" />
				<img class="windowLeft" src="windowLeft.svg" alt="window" />
				<img class="windowRight" src="windowRight.svg" alt="window" />
				<div class="test" />
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
		flex-direction: row;
		flex-wrap: wrap;
		margin: 4rem 2rem;
		gap: 4rem;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	
	}

	.image-container {
		position: absolute;
		width: 205px;
		height: 228px;	

	}

	.storyimage  {
		width: 100%;
		height: 100%;
		cursor: pointer;
		object-fit:cover;
	}

	.window {
		position: relative;
		cursor: pointer;	
	}

	.window:hover .windowLeft {
		transform: rotateY(-180deg);
	}

	.window:hover .windowRight {
		transform: rotateY(180deg);
	}


	.windowLeft {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 20;
		margin-left: 11px;
		margin-bottom: 15px;
		transition: transform 1.5s ease-in-out;
		cursor: pointer;
		transform-style: preserve-3d;
		cursor: pointer;
		transform: perspective(200px);
		transform-origin: left;
	}



	.windowRight {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 20;
		margin-right: 12px;
		margin-bottom: 16px;
		transition: transform 1.5s;
		cursor: pointer;
		transform-style: preserve-3d;
		cursor: pointer;
		transform: perspective(200px);
		transform-origin: right;
	}

	h2 {
		font-size: 14px;
		text-align: center;
		width: 500px;
	}
</style>
