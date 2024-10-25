<script lang="ts">
    import { onMount } from "svelte";

    const data = [
        {
            label: "Industrial Cables",
            img: "/img/products/1.jpg",
        },
        {
            label: "Data & Communication Cables",
            img: "/img/products/2.jpg",
        },
        {
            label: "Connector Solutions",
            img: "/img/products/3.jpg",
        },
        {
            label: "Custom Cable Assemblies",
            img: "/img/products/4.jpg",
        },
        {
            label: "Automotive & Transportation Cables",
            img: "/img/products/5.jpg",
        },
        {
            label: "Telecommunication & Networking Solutions",
            img: "/img/products/6.jpg",
        },
        {
            label: "High-Temperature & Specialty Cables",
            img: "/img/products/7.png",
        },
        {
            label: "Accessories",
            img: "/img/products/8.jpg",
        },
        {
            label: "Tools & Testing Equipment",
            img: "/img/products/9.jpg",
        },
    ];

    let mouseOver = false;
    let percent: string;

    onMount(() => {
        const productsWrapper = document.querySelector("#products");
        const target = document.querySelector("#productsTarget");

        if (!productsWrapper || !target) return;

        productsWrapper?.addEventListener("mouseenter", (e) =>
            handleMouseEnter(e as MouseEvent, target as HTMLElement),
        );
        productsWrapper?.addEventListener("mouseleave", (e) =>
            handleMouseLeave(e as MouseEvent, target as HTMLElement),
        );
        productsWrapper?.addEventListener("mousemove", (e) =>
            handleMouseMove(
                e as MouseEvent,
                target as HTMLElement,
                productsWrapper as HTMLElement,
            ),
        );
    });

    function handleMouseEnter(e: MouseEvent, target: HTMLElement) {
        mouseOver = true;

        target.style.top = e.pageY + "px";
        target.style.left = e.pageX + "px";

        target.style.transition = "";
    }

    function handleMouseMove(
        e: MouseEvent,
        target: HTMLElement,
        wrapper: HTMLElement,
    ) {
        const { width, height } = wrapper.getBoundingClientRect();

        // Example usage:
        percent = getDistancePercentage(
            width / 2 + wrapper.offsetLeft,
            height / 2 + wrapper.offsetTop,
            e.pageX,
            e.pageY,
            width,
            height,
        );
        target.style.opacity = percent;

        target.style.top = e.pageY + "px";

        target.style.top = e.pageY + "px";
        target.style.left = e.pageX + "px";
    }

    function handleMouseLeave(e: MouseEvent, target: HTMLElement) {
        mouseOver = false;

        target.style.transition = "opacity 800ms ease";
        setTimeout(() => {
            target.style.opacity = "0";
        }, 300);
    }

    function getDistancePercentage(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        containerWidth: number,
        containerHeight: number,
    ) {
        // Step 1: Calculate Euclidean distance
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        // Step 2: Define max possible distance (diagonal of the container)
        const maxDistance = Math.sqrt(
            containerWidth ** 2 + containerHeight ** 2,
        );

        // Step 3: Calculate distance as a percentage
        const distancePercent = (distance / maxDistance) * 100;

        return (distancePercent / 100).toFixed(2); // Optional: format to 2 decimal places
    }
</script>

<section id="products">
    <div class="container relative z-20">
        <div
            style="--gap: 1rem;"
            class="flex flex-wrap gap-[var(--gap)] items-center justify-center"
        >
            {#each data as item}
                <div
                    class="w-full bg-dark lg:w-[calc(33%-var(--gap))] z-0 aspect-[3/2] group relative flex-grow flex flex-col justify-center items-center p-4 rounded-xl cursor-default"
                >
                    <img
                        class="w-full z-10 h-full object-cover absolute top-0 left-0 rounded-xl opacity-40 transition-opacity duration-300 group-hover:opacity-60"
                        src={item.img}
                        alt={item.label}
                    />
                    <h4 class="relative z-20">{item.label}</h4>
                </div>
            {/each}
        </div>
    </div>
    <div
        id="productsTarget"
        style="opacity: 0;"
        class="absolute aspect-square shadow-2xl shadow-primary transition-opacity bg-primary blur-3xl rounded-full -z-10 w-60 -translate-x-1/2 -translate-y-1/2"
    ></div>
</section>
