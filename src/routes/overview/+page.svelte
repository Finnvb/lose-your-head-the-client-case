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
			<img class="storyimage" src={data.data.storyimages[0].image1.url} alt="test" />


          
			<h2>{@html prismicH.asHTML(data.data.storytitle)}</h2>

	
			<Button link={data.uid} linktext={'Discover'} height={'4rem'} />
     
		
		</section>
  
	{/each}
</main>

<!-- <Footer /> -->

<style>
	main {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
        /* flex-wrap: nowrap; */
		overflow-x: scroll;
        /* white-space:nowrap; */
        overflow-y: hidden;
		margin: 4rem 2rem;
		gap: 4rem;

        /* scrollbar-width: none; */
        cursor: grab;
        /* -webkit-overflow-scrolling: touch; */
	}

	section {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        height: 400px;
     
      
	}



	.storyimage {
		width: 200px;
		height: 200px;
	}

	/* img {
		height: 3rem;
	
		border-radius: 1rem;
	} */

	h2 {
		font-size: 1rem;
	}
</style>
