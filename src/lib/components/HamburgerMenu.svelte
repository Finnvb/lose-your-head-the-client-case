<script>
    import { fly } from 'svelte/transition';
    // import Footer from '$lib/components/Footer.svelte';
</script>

<section transition:fly={{ y: -200, duration: 300 }}>
   
   <nav>
       <li><a href="/">HOME</a></li>
       <li><a href="/">LEERJAREN</a></li>
       <li><a href="/">SQUADS</a></li>

       <li><a href="/about">ABOUT US</a></li>


   </nav>

   <!-- <Footer name={"FDND"}/> -->
</section>



<style>
   section {
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       background-color: black;
       top: 0;
       width: 100vw;
       height: 100vh;
       z-index: 999;
       color: #ffffff;
       opacity: 100;
     
   }

   a{
       text-decoration: none;
       color: lightgray;
       font-size: 2rem;
       font-weight: bold;
       transition: 300ms;
   }


   a:hover{
       color:#FFFFFF;
   }
   li:hover{
       transform: scale(1.2);
    
   }



   nav{
       display: flex;
       flex-direction: column;
       align-items: center;
   }

   li{
       list-style: none;
       margin: 1.5rem 0;
       transition: 300ms;
   }
</style>