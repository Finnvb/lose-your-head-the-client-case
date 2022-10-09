<script lang="ts">
    import { fade } from 'svelte/transition'

    export let url: URL;
</script>

{#key url}
<div>
in:fade={{duration:2000, delay:250}}
out:fade={{duration:2000}}

<slot/>
</div>
{/key}