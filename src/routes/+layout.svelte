<script>

    import '../styles/global.css'

</script>

<main>
<!-- <img src="/background.jpg" alt="background"> -->

<slot></slot>

</main>

<style>

    /* img{
        width: 100vw;
        height: 100vh;
        position: absolute;
    } */

   main{ 
    background-image: url("background.jpg");
    height: 100vh;
    width: 100vw;
    background-repeat: repeat;
    background-position: center; 
   background-size: cover;

}
</style>