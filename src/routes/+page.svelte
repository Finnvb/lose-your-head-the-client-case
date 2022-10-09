<script>
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	  import * as prismicH from "@prismicio/helpers";
    export let data;

    const { document } = data;


	import { fade } from 'svelte/transition';


	

	// console.log(document)
</script>

<main >
	<header>
		<!-- <h1>{@html prismicH.asHTML(document[2].data.storytitle)}</h1> -->
		<h1 >Stories of the <br /> ILOJO BAR</h1>

		<h2 >Discover the stories of the <br /> demolished bar in Lagos</h2>
	</header>

	<section>


		<Button link={'overview'} linktext={'Discover Stories'} height={'6rem'}/>


		<img class="ilojo-bar" src="cdf-1950s.png" alt="Ilojo-bar" />


	</section>
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

	
	.ilojo-bar {

	height: 20rem;
	box-shadow: 0px 0px 20px 1px #000;
	border: 7px solid var(--red);
		
	}

	section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		margin: 2rem 0;
	}
</style>
