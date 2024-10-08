<script lang="ts">
    import "$lib/css/app.scss";
    import Header from "$lib/includes/Header.svelte";
    import Footer from "$lib/includes/Footer.svelte";

    import { Observe } from "$lib/observer";
    import { onMount } from "svelte";
    import { afterNavigate, onNavigate } from "$app/navigation";

    let cusEvent: null | CustomEvent;

    onMount(() => {
        const items = document.querySelectorAll("[data-anim]");
        cusEvent = Observe(items)!;

        window.addEventListener("onnavigate", (e: any) => {
            if (e.detail.observer) {
                (e.detail.observer as IntersectionObserver).disconnect();
            }
        });
    });

    afterNavigate(() => {
        const items = document.querySelectorAll("[data-anim]");
        cusEvent = Observe(items)!;
    });

    onNavigate(() => {
        if (cusEvent) {
            window.dispatchEvent(cusEvent);
        }
    });
</script>

<Header />
<main class="grid-cols-12"><slot /></main>
<Footer />
