<script lang="ts">
    const data = [
        {
            label: "Free lunches in our canteen",
            img: "/img/career/canteen.jpg",
        },
        {
            label: "A bonus to cover your travel expenses for public transportation or gas",
            img: "/img/career/transport.jpg",
        },
        {
            label: "Remote work options where possible and an international exchange program that lets you temporarily work from any datatech site around the world",
            img: "/img/career/homeoffice.jpg",
        },
        {
            label: "A friendly and open atmosphere with a flat hierarchy. We value good ideas no matter who they come from",
            img: "/img/career/teamwork.jpg",
        },
        {
            label: "The opportunity to collaborate with experts across a range of disciplines",
            img: "/img/career/talk.jpg",
        },
    ];

    let active = 0;

    const setActive = (index: number) => {
        active = index;
    };
</script>

<section>
    <div class="container">
        <!-- Features -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="relative p-6 md:p-16">
                <!-- Grid -->
                <div
                    class="relative z-10 flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center"
                >
                    <div
                        class="order-2 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2"
                    >
                        <h2 class="text-2xl text-light font-bold sm:text-3xl">
                            Fully customizable rules to match your unique needs
                        </h2>

                        <!-- Tab Navs -->
                        <nav
                            class="grid gap-4 mt-5 md:mt-10"
                            style="--anim-delay: 0s"
                            data-anim="fade-in"
                        >
                            {#each data as navItem, i}
                                <button
                                    type="button"
                                    on:click={() => setActive(i)}
                                    class={`${active == i ? "bg-secondary" : "hover:bg-secondary"} text-start focus:outline-none  p-4 md:p-5 rounded-xl`}
                                >
                                    <span class="flex gap-x-6 items-center">
                                        <svg
                                            class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m4.5 12.75 6 6 9-13.5"
                                            />
                                        </svg>

                                        <span class="grow">
                                            <span
                                                class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200"
                                                >{navItem.label}</span
                                            >
                                        </span>
                                    </span>
                                </button>
                            {/each}
                        </nav>
                        <!-- End Tab Navs -->
                    </div>
                    <!-- End Col -->

                    <div class="order-1 lg:col-span-6">
                        <div class="relative">
                            <!-- Tab Content -->
                            <div>
                                <div
                                    style="--anim-delay: 0.1s"
                                    data-anim="fade-in"
                                >
                                    <!-- svelte-ignore a11y-img-redundant-alt -->
                                    <img
                                        class="shadow-xl rounded-xl shadow-gray-900/20 aspect-[1] lg:aspect-[9/12] object-cover"
                                        src={data[active].img}
                                        alt="Features Image"
                                    />
                                </div>
                            </div>
                            <!-- End Tab Content -->

                            <!-- SVG Element -->
                            <div
                                class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20"
                            >
                                <svg
                                    class="w-16 h-auto text-primary"
                                    width="121"
                                    height="135"
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <!-- End SVG Element -->
                        </div>
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->

                <!-- Background Color -->
                <div class="absolute inset-0 grid grid-cols-12 size-full">
                    <div
                        class="col-span-full relative lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full bg-dark after:absolute after:w-full after:h-full after:-top-[2px] after:-left-[2px] after:bg-gradient-to-br after:from-primary after:to-dark after:rounded-xl after:-z-10"
                    ></div>
                </div>
                <!-- End Background Color -->
            </div>
        </div>
        <!-- End Features -->
    </div>
</section>
