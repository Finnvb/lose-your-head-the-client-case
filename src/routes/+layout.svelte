<script>
import PageTransition from '$lib/components/PageTransition.svelte';

/** @type {import('./$types').LayoutData} */
export let data;
    import '../styles/global.css'

</script>


<PageTransition pathname={data.pathname}>
<slot></slot>

</PageTransition>

<style>

 
</style>