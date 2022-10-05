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


</main>

<style>

main{
	display: flex;
	justify-content: center;
}
</style>