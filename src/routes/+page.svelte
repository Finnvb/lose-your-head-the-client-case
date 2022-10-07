<script>
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	  import * as prismicH from "@prismicio/helpers";
    export let data;

    const { document } = data;

	// console.log(document)
</script>

<main>
	<header>
		<!-- <h1>{@html prismicH.asHTML(document[2].data.storytitle)}</h1> -->
		<h1>Stories of the <br /> ILOJO BAR</h1>

		<h2>Discover the stories of the <br /> demolished bar in Lagos</h2>
	</header>

	<section>

		<!-- <div class="container">
			<img src="goldplate2.png" alt="goldplate2" />
			<div class="centered"><a href="/overview">Discover Stories</a></div>
		</div> -->
		<Button link={'overview'} linktext={'Discover Stories'} height={'6rem'}/>

		<!-- <div class="container"> -->
			<!-- <img class="frame" src="pictureFrame.png" alt="frame"/> -->
		<img class="ilojo-bar" src="cdf-1950s.png" alt="Ilojo-bar" />

	<!-- </div> -->
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

	

	/* .container{
		position: relative;
		width: 30rem;
		height: 20rem;	
		background-color: aqua;
		z-index: -5;
		
	} */

	/* .frame{
		width: 100%;
		height: 100%;
		position: absolute;
	object-fit: fill;
	z-index: 2;

	
	} */


	.ilojo-bar {
	/* margin-left: 1rem;
	margin-top: 1rem;
		height: 90%;
		width: 90%;
		position: absolute;
		object-fit: cover;
		z-index: -3; */

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
