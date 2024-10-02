<script lang="ts">
    import Logo from "./components/Logo.svelte";
    import Hamburger from "./components/Hamburger.svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

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

    let ShadowActive = false;
    onMount(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                ShadowActive = true;
            } else {
                ShadowActive = false;
            }
        });
    });

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
    };
</script>

<header
    class="flex items-center maw-w-screen justify-between fixed top-4 z-50 container left-1/2 -translate-x-1/2"
>
    <div class="w-10 h-10 aspect-square bg-light rounded-lg">
        <a href="/"><Logo /></a>
    </div>
    <div>
        <button
            on:click={toggleMenu}
            class="lg:hidden w-10 bg-light rounded-lg flex"
            ><Hamburger /></button
        >
        <div
            class={`fixed -top-4 w-screen h-screen h-[100dvh] lg:w-max lg:static lg:bg-transparent lg:h-max lg:opacity-100 bg-dark text-light grid place-content-center gap-4 transition-all duration-700 ${
                isOpen ? "left-0 opacity-100" : "-left-full opacity-70"
            }`}
        >
            <button
                on:click={toggleMenu}
                class="absolute top-4 right-4 lg:hidden">close</button
            >
            <ul
                class={`flex flex-col z-0 lg:flex-row w-full justify-center gap-4 bg-dark lg:px-8 py-3 rounded-full text-light transition-shadow duration-300 relative lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:w-full lg:after:rounded-full lg:after:h-full lg:after:border-b lg:after:border-muted lg:after:duration-500 lg:after:transition-opacity ${ShadowActive ? "lg:after:opacity-100" : "lg:after:opacity-0"}`}
            >
                {#each links as link}
                    <li
                        class={`relative z-10 text-4xl lg:text-lg text-center after:absolute after:w-full after:bottom-0 after:left-0 after:rounded-full after:max-w-0 after:duration-300 after:transition-[max-width] after:h-px after:bg-primary hover:after:max-w-full ${$page.url.pathname == link.href ? "after:max-w-full" : ""}`}
                    >
                        <a on:click={toggleMenu} href={link.href}
                            >{link.label}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</header>
