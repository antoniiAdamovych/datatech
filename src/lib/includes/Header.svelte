<script lang="ts">
    import Logo from "./components/Logo.svelte";
    import { page } from "$app/stores";

    const links = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/about",
            label: "About",
        },
        {
            href: "/products",
            label: "Products",
        },
        {
            href: "/career",
            label: "Career",
        },
        {
            href: "/partners",
            label: "Partners",
        },
    ];
</script>

<header class="grid-cols-12 grid items-center justify-between fixed top-4 z-50">
    <div class=" col-start-2 col-end-3 w-10 aspect-square bg-light rounded-lg">
        <a href="/"><Logo /></a>
    </div>
    <ul class="flex justify-center col-start-8 col-end-12 w-full gap-4 bg-dark px-8 py-3 rounded-full text-light">
        {#each links as link}
            <li
                class={`relative after:absolute after:w-full after:bottom-0 after:left-0 after:rounded-full after:max-w-0 after:duration-300 after:transition-[max-width] after:h-px after:bg-primary hover:after:max-w-full ${$page.url.pathname == link.href ? "after:max-w-full" : ""}`}
            >
                <a href={link.href}>{link.label}</a>
            </li>
        {/each}
    </ul>
</header>
