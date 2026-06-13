<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children, data } = $props();
</script>

<Navbar siteContent={data.siteContent} />
<main>
  {@render children()}
</main>
<Footer siteContent={data.siteContent} />
