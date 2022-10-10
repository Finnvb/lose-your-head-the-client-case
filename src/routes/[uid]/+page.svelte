<script>
	export let data;
	import * as prismicH from '@prismicio/helpers';
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';


	console.log(data);


	import { fade } from 'svelte/transition';
</script>

<Header />

<h1>{@html prismicH.asHTML(data.storytitle)}</h1>
<main>
	<p>{@html prismicH.asHTML(data.storypara[0].para1)}</p>
	<div class="center">
		<img
			class="storyimage"
			src={data.storyimages[0].image1.url}
			alt={data.storyimages[0].image1.alt}
		/>
		<p class="alt">{data.storyimages[0].image1.alt}</p>
	</div>
	{#if data.storyimages[0].image2.url !== undefined}
		<div class="center">
			<img
				class="storyimage"
				src={data.storyimages[0].image2.url}
				alt={data.storyimages[0].image2.alt}
			/>
			<p class="alt">{data.storyimages[0].image2.alt}</p>
		</div>
	{/if}

	<p>{@html prismicH.asHTML(data.storypara[0].para2)}</p>

	<p>{@html prismicH.asHTML(data.storypara[0].para3)}</p>
	{#if data.storyimages[0].image3.url !== undefined}
		<div class="center">
			<img
				class="storyimage"
				src={data.storyimages[0].image3.url}
				alt={data.storyimages[0].image3.alt}
			/>
			<p class="alt">{data.storyimages[0].image3.alt}</p>
		</div>
	{/if}
	{#if data.storyimages[0].image4.url !== undefined}
		<div class="center">
			<img
				class="storyimage"
				src={data.storyimages[0].image4.url}
				alt={data.storyimages[0].image4.alt}
			/>
			<p class="alt">{data.storyimages[0].image4.alt}</p>
		</div>
	{/if}
	<p>{@html prismicH.asHTML(data.storypara[0].para4)}</p>

	<p>{@html prismicH.asHTML(data.storypara[0].para5)}</p>
	{#if data.storyimages[0].image5.url !== undefined}
		<div class="center">
			<img
				class="storyimage"
				src={data.storyimages[0].image5.url}
				alt={data.storyimages[0].image5.alt}
			/>
			<p class="alt">{data.storyimages[0].image5.alt}</p>
		</div>
	{/if}

	{#if data.storyimages[0].image6.url !== undefined}
		<div class="center">
			<img
				class="storyimage"
				src={data.storyimages[0].image6.url}
				alt={data.storyimages[0].image6.alt}
			/>
			<p class="alt">{data.storyimages[0].image6.alt}</p>
		</div>
	{/if}
	<p>{@html prismicH.asHTML(data.storypara[0].para6)}</p>

	<ScrollToTopButton uid={data.uid}/>
</main>



<!-- <Footer/> -->
<style>
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		margin-bottom: 2rem;
		position: relative;
	}

	p {
		width: 50%;
		line-height: 140%;
		width: 30rem;
		font-size: 1rem;
		margin-bottom: 5rem;
		
	}

	div p {
		text-align: center;
		font-size: 14px;
	}

	h1 {
		margin-bottom: 3rem;
		font-size: 1.5rem;
		text-align: center;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	img {
		width: 25rem;
		height: 100%;
		border-radius: 0.5rem;
		box-shadow: 0px 30px 50px 2px #000;
	}

	@media (max-width:40rem){
				img{
					width: 18rem;
				}

				p{
					width: 20rem;
					margin-bottom: 0rem;
				}

				main{
					gap:2rem;
				}

				h1{font-size: 0.8rem;
				padding: 0rem 1rem;
			margin: 2rem 0;}
		}


</style>
