<script lang="ts">
    import "$lib/css/app.css"
    import Header from "$lib/includes/Header.svelte";
</script>

<Header />
<main class="grid-cols-12"><slot /></main>
<footer>Footer</footer>