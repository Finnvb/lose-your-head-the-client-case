<script>
    import { fly } from 'svelte/transition';
    import {page} from '$app/stores';

</script>


<section transition:fly={{ x:1000, duration: 700 }}>
   
   <nav>
   
        <li  transition:fly={{ x:1200, duration: 700, delay:200}}><a href="/a-spanish-migrant-looking-for-greener-pastures" class:active={$page.url.pathname === '/a-spanish-migrant-looking-for-greener-pastures'}>A Spanish Migrant</a></li> 
        <li transition:fly={{ x:1200, duration: 700, delay:250 }}><a href="/the-returnees-who-changed-lagos" class:active={$page.url.pathname === '/the-returnees-who-changed-lagos'}>The returnees</a></li>
        <li transition:fly={{ x:1200, duration: 700, delay:300 }}><a href="/a-vip-from-abeokuta-visits-fernandez-house" class:active={$page.url.pathname === '/a-vip-from-abeokuta-visits-fernandez-house'}>A VIP</a></li>
       <li transition:fly={{ x:1200, duration: 700, delay:350 }}><a href="/the-macaulay-connection" class:active={$page.url.pathname === '/the-macaulay-connection'}>The Macaulay connection</a></li> 
       <li transition:fly={{ x:1200, duration: 700, delay:400 }}><a href="/a-family-house-to-the-olaiyas" class:active={$page.url.pathname === '/a-family-house-to-the-olaiyas'}>A family house</a></li> 
       <li transition:fly={{ x:1200, duration: 700, delay:450 }}><a href="/memories-of-slave-trade" class:active={$page.url.pathname === '/memories-of-slave-trade'}>Slave trade</a></li> 
       <li transition:fly={{ x:1200, duration: 700, delay:500 }}><a href="/botched-dreams-for-ilojo-bar" class:active={$page.url.pathname === '/botched-dreams-for-ilojo-bar'}>Botched dreams</a></li> 
       <li transition:fly={{ x:1200, duration: 700, delay:550 }}><a href="/the-angels-story" class:active={$page.url.pathname === '/the-angels-story'}>The Angel's Story</a></li> 
       <li transition:fly={{ x:1200, duration: 700, delay:600 }}><a href="/illegal-demolition" class:active={$page.url.pathname === '/illegal-demolition'}>Illegal demolition</a></li> 
 

   </nav>

</section>



<style>
   section {
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       background-color:var(--red);
       top: 0;
       right: 0;
       width: 30vw;
       height: 100vh;
       color: #ffffff;
       opacity: 100;
       z-index: 100;
       position: fixed;
     
   }

   a{
       text-decoration: none;
       color: var(--grey);
       font-size: 1.5rem;
       transition: 300ms;
   }



   a:hover{
       color:var(--light);
   }
   li:hover{
       transform: scale(1.2);
    
   }

   a.active{
    font-weight: bold;
    color: var( --redLight);
    
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
       text-align: center;
   }


   @media (max-width:40rem){
    section{
        width: 70vw;
    }
   }
</style>