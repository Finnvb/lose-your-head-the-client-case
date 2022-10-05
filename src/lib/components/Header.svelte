<script>
	import Menu from '$lib/components/HamburgerMenu.svelte';

	let close;
	let openImg;
	let text;
	export let open = false;

	export let closeMenu = () => {
		close.style.display = 'none';
		openImg.style.display = 'flex';
		text.style.visibility = 'hidden';
		open = true;
	};

	export let openMenu = () => {
		openImg.style.display = 'none';
		close.style.display = 'flex';
		text.style.visibility = 'visible';
		open = false;
	};
</script>

<header>
	<div class="home">
		<a class="centered" href="/">Home </a>
	</div>

	<h1>Stories of the <br /> ILOJO BAR</h1>

	<div>
		<div class="container">
			<img bind:this={close} on:click={closeMenu} src="close.svg" alt="closeImg" />
			<img
				class="close"
				bind:this={openImg}
				on:click={openMenu}
				src="hamburgerMenu.svg"
				alt="hamburgerImg"
			/>
		</div>
		<p bind:this={text}>Menu</p>
	</div>
</header>

{#if open}
	<Menu/>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ffffff;
		font-size: 1.5rem;
		padding: 1rem;
	}

	.centered {
		position: absolute;
		top: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	a {
		text-decoration: none;
		color: rgb(118, 113, 19);
		font-size: 1.4rem;
		padding: 1.2rem;
	}
	.home {
		position: relative;
		width: 7rem;
		height: 5rem;
		background-image: url('goldplatehome.svg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}


	.centered {
		position: absolute;
		top: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	h1 {
		text-align: center;
		font-size: 1.2rem;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
	}

	p {
		font-size: 1rem;
	}

	img {
		cursor: pointer;

		z-index: 9999;
	}

	.close {
		display: none;
	}
</style>
