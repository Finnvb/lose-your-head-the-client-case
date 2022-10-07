<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';


</script>


<Header />

<main>

		
			<h2>{@html prismicH.asHTML(data.storytitle)}</h2>

			<article>
				{@html prismicH.asHTML(data.storycontent)}
			</article>


</main>

<style>

main{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	/* height: 100vh; */
	
	padding: 0 5rem;
}

h2{
	margin-bottom: 2rem;
}

article{
	width: 900px;
	margin-bottom: 2rem;
	line-height: 140%;
	width: 30rem;
}
</style>