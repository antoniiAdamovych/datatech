<script lang="ts">
    import Logo from "./components/Logo.svelte";
    import Hamburger from "./components/Hamburger.svelte";
    import ChevrofDown from "./components/ChevrofDown.svelte";

    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Layout from "../../routes/+layout.svelte";

    let active = "";

    const links = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/about",
            label: "About",
            children: [
                {
                    href: "/about#company",
                    label: "Company",
                },
                {
                    href: "/about#history",
                    label: "History",
                },
                {
                    href: "/about#team",
                    label: "Our team",
                },
            ],
        },
        {
            href: "/products",
            label: "Products",
        },
        {
            href: "/career",
            label: "Career",
            children: [
                {
                    href: "/career/working-at",
                    label: "Working at DataTech",
                },
                {
                    href: "/career/jobs",
                    label: "Jobs",
                },
                {
                    href: "/career/graduates-program",
                    label: "Graduates program",
                },
            ],
        },
        {
            href: "/partners",
            label: "Partners",
        },
    ];

    const setActive = (value: string) => {
        if (active == value) {
            active = "";
        } else {
            active = value;
        }
    };

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

<header class="fixed top-4 z-50 left-1/2 -translate-x-1/2 px-2">
    <div class="container flex items-center maw-w-screen justify-between relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:-z-10 lg:bg-transparent lg:border-none lg:after:hidden after:rounded-xl after:bg-dark bg-secondary bg-opacity-30 border border-secondary rounded-xl py-1">
        <div class="w-10 h-10 aspect-square rounded-lg">
            <a href="/"><Logo /></a>
        </div>
        <div>
            <button
                on:click={toggleMenu}
                class="lg:hidden w-10 rounded-lg flex"
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
                            class={`relative group z-10 text-4xl lg:text-lg text-center after:absolute after:w-full after:bottom-0 after:left-0 after:rounded-full after:max-w-0 after:duration-300 after:transition-[max-width] after:h-px after:bg-primary lg:hover:after:max-w-full ${$page.url.pathname == link.href || (link.children && link.children.some((ch) => ch.href == $page.url.pathname)) ? "after:max-w-full" : ""}`}
                        >
                            <div class="flex items-center justify-center gap-4 lg:gap-1">
                                <a on:click={toggleMenu} href={link.href}
                                    >{link.label}
                                </a>
                                {#if link.children && link.children.length > 0}
                                    <button
                                        on:click={() => setActive(link.label)}
                                        class={`w-6 block transition-transform duration-300 lg:rotate-0 lg:group-hover:rotate-180 ${active == link.label ? "rotate-180" : "rotate-0"}`}
                                        ><ChevrofDown /></button
                                    >
                                {/if}
                            </div>
                            {#if link.children && link.children.length > 0}
                                <div
                                    class={`${active == link.label ? "max-h-max" : "max-h-0"} lg:absolute group-hover:opacity-100 lg:opacity-0 lg:max-h-max overflow-hidden lg:overflow-visible h-max group-hover:z-10 group-hover:pointer-events-auto pointer-events-none top-full -z-10 lg:left-1/2 lg:-translate-x-1/2 w-max min-w-full rounded-l lg:after:absolute lg:after:w-[102%] lg:after:h-full lg:after:-bottom-[2px] lg:after:bg-gradient-to-t lg:after:from-primary lg:after:to-dark lg:after:rounded lg:after:left-1/2 lg:after:-translate-x-1/2`}
                                >
                                    <ul
                                        class="lg:bg-dark relative z-10 px-4 py-2"
                                    >
                                        {#each link.children as child}
                                            <li
                                                class={`relative z-10 text-base w-full transition-colors ${$page.url.pathname == child.href ? "text-light" : "text-muted hover:text-light"}`}
                                            >
                                                <a
                                                    on:click={toggleMenu}
                                                    class="w-full"
                                                    href={child.href}
                                                    >{child.label}</a
                                                >
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</header>
