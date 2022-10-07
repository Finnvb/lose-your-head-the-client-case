<script>
    import { fly } from 'svelte/transition';

   

</script>

<section transition:fly={{ x:1000, duration: 700 }}>
   
   <nav>
   
        <li><a href="/a-spanish-migrant-looking-for-greener-pastures">A Spanish Migrant</a></li> 
        <li><a href="/the-returnees-who-changed-lagos">The returnees</a></li>
        <li><a href="/a-vip-from-abeokuta-visits-fernandez-house">A VIP</a></li>
       <li><a href="/the-macaulay-connection">The Macaulay connection</a></li> 
       <li><a href="/a-family-house-to-the-olaiyas">A family house</a></li> 
       <li><a href="/memories-of-slave-trade">Slave trade</a></li> 
       <li><a href="/botched-dreams-for-ilojo-bar">Botched dreams</a></li> 
       <li><a href="/the-angels-story">The Angel's Story</a></li> 
       <li><a href="/illegal-demolition">Illegal demolition</a></li> 
 

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
       z-index: 100;
       position: fixed;
     
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