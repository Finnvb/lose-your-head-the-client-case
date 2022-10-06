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

<div class="window">
			<img class="window" src="window.svg" alt="window" />
			<img class="windowLeft" src="windowLeft.svg" alt="window" />
			<img class="windowRight" src="windowRight.svg" alt="window" />
		</div>


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
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.image-container {
		
		position: absolute;
		width: 203px;
		height: 225px;

		
	}
	.window {
		position: relative;
		/* bottom: 0; */
		/* right: 0; */
		/* z-index: 100; */
		
	}

	.windowLeft{
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 20;
		margin-left: 12px;
		margin-bottom: 11px;
		/* padding-top: 12px; */
		transition: transform 1.5s ease-in-out;
		cursor: pointer;
        transform-style: preserve-3d;
        cursor: pointer;
        transform: perspective(200px);
		
	}



	.windowLeft:hover{
		transform: rotateY(-180deg);
		/* transform:rotateZ(180deg); */
		transform-origin: left;
/* transform-box:fill-box; */
	}

	.windowRight{
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 20;
	
		margin-right: 13px;
		margin-bottom: 11px;
		/* padding-top: 12px; */
		transition: transform 1.5s;
		cursor: pointer;
        transform-style: preserve-3d;
        cursor: pointer;
        transform: perspective(200px);
	}

	.windowRight:hover{
		transform: rotateY(180deg);
		/* transform:rotateZ(180deg); */
		transform-origin: right;
/* transform-box:fill-box; */
	}

	.storyimage {
		width: 100%;
		height: 100%;

	}


	h2 {
		font-size: 1rem;
	}
</style>



