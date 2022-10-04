<script>
    import Menu from "$lib/components/HamburgerMenu.svelte";
   
   export let image;
   let close;
   let openImg;
   let text;
   export let open = false;
  
   export let closeMenu = () => {
     close.style.display = "none";
     openImg.style.display = "flex";
     text.style.visibility = "hidden";
     open = true;
   };
 
 
   export let openMenu = () => {
     openImg.style.display = "none";
     close.style.display = "flex";
     text.style.visibility = "visible";
     open = false;
   };
 
 </script>




<header>
    <h1>FDND.</h1>
  
    <div>
  
      <div class="container">
        <img
        
          bind:this={close}
          on:click={closeMenu}
          src="close.svg"
          alt="closeImg"
        />
        <img
          class="close"
          bind:this={openImg}
          on:click={openMenu}
          src="hamburgerMenu.svg"
          alt="hamburgerImg"
        />
      </div>
      <p  bind:this={text}>Menu</p>
    </div>
  </header>
  
  {#if (open)}
  <Menu/>
  {/if}
  
  
  
  <style>
    header {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 1rem;
  
    
    }
  
    div {
      display: flex;
      flex-direction: column;
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