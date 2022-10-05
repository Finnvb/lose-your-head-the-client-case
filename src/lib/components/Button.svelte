<script>

    export let link;
    export let linktext;
</script>

 <div class="container">
    <img src="goldplate2.png" alt="goldplate2" />
    <div class="centered"><a href="/{link}">{linktext}</a></div>
</div>


<style>

.container {
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
	}

    img {
		height: 6rem;
        /* padding: 1rem; */
	
		
	}

    a {
		text-decoration: none;
		color: white;
		font-size: 1.4rem;
	}

</style>