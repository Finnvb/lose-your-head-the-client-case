<script>
    import { fly } from 'svelte/transition';
    // import Footer from '$lib/components/Footer.svelte';
</script>

<section transition:fly={{ x:1000, duration: 800 }}>
   
   <nav>
       <li><a href="/">Spanish Migrant</a></li>
       <li><a href="/">The VIP</a></li>
       <li><a href="/">A family House</a></li>




   </nav>

   <!-- <Footer name={"FDND"}/> -->
</section>



<style>
   section {
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       background-color:maroon;
       top: 0;
       right: 0;
       width: 30vw;
       height: 100vh;
       color: #ffffff;
       opacity: 100;
     
   }

   a{
       text-decoration: none;
       color: lightgray;
       font-size: 1.5rem;
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
       margin: 0.5rem 0;
       transition: 300ms;
   }
</style>