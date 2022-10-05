<script>
    import { fly } from 'svelte/transition';

    // import * as prismicH from "@prismicio/helpers";
    // export let data;

    // const { document } = data;

</script>

<section transition:fly={{ x:1000, duration: 700 }}>
   
   <nav>
        <li><a href="/">Spanish Migrant</a></li> 
        <li><a href="/">The VIP</a></li>
       <li><a href="/">A family House</a></li> 


       <!-- <ul>
        {#each data.document as data}
        <li><a href="/{data.uid}">{@html prismicH.asHTML(data.data.storytitle)}</a> </li>
        {/each}
        
    </ul>
      -->

   </nav>

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
       z-index: 10;
     
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