<script lang="ts">
    import "$lib/css/app.css"
    import Header from "$lib/includes/Header.svelte";
    import Footer from "$lib/includes/Footer.svelte";
</script>

<Header />
<main class="grid-cols-12"><slot /></main>
<Footer />