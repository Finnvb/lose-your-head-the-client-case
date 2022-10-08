<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";
	import Header from '../../lib/components/Header.svelte';
	import Footer from '../../lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';

let number;
console.log(data)
let test = 1
// console.log(data.storyimages[0].image2.alt)
</script>


<Header />

<main>

		
			<h2>{@html prismicH.asHTML(data.storytitle)}</h2>

			<article>
				{@html prismicH.asHTML(data.storycontent)}
			</article>

	
			 
		
			 <img class="storyimage"  src={data.storyimages[0].image1.url} alt={(data.storyimages[0].image1.alt)} /> 
			 <!-- <p>{(data.storyimages[0].image1.alt)}</p> -->
			 <img class="storyimage"  src={data.storyimages[0].image2.url} alt={(data.storyimages[0].image2.alt)} />
			 <!-- <p>{(data.storyimages[0].image2.alt)}</p> -->
			<img class="storyimage"  src={data.storyimages[0].image3.url} alt={(data.storyimages[0].image3.alt)} />
			<!-- <p>{(data.storyimages[0].image3.alt)}</p> -->
			<img class="storyimage"  src={data.storyimages[0].image4.url} alt={(data.storyimages[0].image4.alt)} />
			<!-- <p>{(data.storyimages[0].image4.alt)}</p> -->
			<img class="storyimage"  src={data.storyimages[0].image5.url} alt={(data.storyimages[0].image5.alt)} /> 
			<!-- <p>{(data.storyimages[0].image5.alt)}</p> -->
			<img class="storyimage"  src={data.storyimages[0].image6.url} alt={(data.storyimages[0].image6.alt)} />
			<!-- <p>{(data.storyimages[0].image6.alt)}</p> -->
			<img class="storyimage"  src={data.storyimages[0].image7.url} alt={(data.storyimages[0].image7.alt)} />
			<!-- <p>{(data.storyimages[0].image7.alt)}</p> -->

			


			<!-- {#each data.storyimages as image}
	
	<img class="storyimage"  src={data.storyimages[0].image3.url} alt="test" />
{/each} -->

		
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

img{
	width: 25rem;
	height: 100%;
}
</style>