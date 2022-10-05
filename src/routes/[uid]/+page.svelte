<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";

	// console.log(data)

	// import Header from "$lib/components/Header.svelte";
	// import Footer from "$lib/components/Footer.svelte";
	// import { text } from "svelte/internal";
</script>

<!-- <Header  /> -->

<main>

		
			<h2>{@html prismicH.asHTML(data.storytitle)}</h2>
			<!-- <p>{@html prismicH.asHTML(data.date)}</p> -->

			<!-- <img src={data.image.url} alt="we-love-web-img" /> -->
	
		<!-- <p>{@html prismicH.asHTML(data.content)}</p> -->

</main>

<style>
	/* img {
		width: 30%;
	} */

	/* main{
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	} */
</style>