<script>
	import Header from '../../lib/components/Header.svelte';
    import Footer from '../../lib/components/Footer.svelte';
    import Button from '$lib/components/Button.svelte';
	import * as prismicH from '@prismicio/helpers';
	export let data;

	const { document } = data;

    console.log(document)
</script>

<Header />

    

<main>
    {#each data.document as data}
        
            <section>

                <img class="storyimage" src={data.data.storyimages[0].image1.url} alt="test" />

                <h2> {@html prismicH.asHTML(data.data.storytitle)}</h2>

                <!-- <div class="container">
                    <img src="goldplate2.png" alt="goldplate2" />
                    <div class="centered"><a href="/{data.uid}">Discover Stories</a></div>
                </div> -->
                <Button link={data.uid} linktext={'Discover'}/>


                <!-- <ul>
                    <a href="/{data.uid}">
                    <li>
                        {@html prismicH.asHTML(data.data.storytitle)}
                    </li>
                </a>
                   
                    <li>
                        <img src={data.data.storyimages[0].image1.url} alt="test" />
                    </li> 
                </ul> -->
            </section>
      
    {/each}
</main>

<Footer />

<style>


main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;
    margin-top: 4rem;

   
}

/* .container {
		position: relative;
		text-align: center;
		color: white;
	}

	.centered {
		position: absolute;
		top: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	} */

 section{
    background-color: aqua;
   /* height: 250px; */
   text-align: center;
 }

 .storyimage{
    width: 200px;
    height: auto;
 }

 /* img {
		height: 3rem;
	
		border-radius: 1rem;
	} */


    h2{
        font-size: 1rem;
    }

</style>
