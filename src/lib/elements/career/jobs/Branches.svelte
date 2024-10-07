<script lang="ts">
    import { goto } from "$app/navigation";
    import { types } from "./data";

    const handleClick = (id: string, i: number) => {
        const customEvent = new CustomEvent("typeclicked", {
            detail: {
                id,
                i
            },
        });

        window.dispatchEvent(customEvent);

        goto("#jobs")
    };
</script>

<section>
    <div class="container">
        <!-- Features -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div
                class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32"
            >
                <div>
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img
                        class="rounded-xl"
                        src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                        alt="Features Image"
                    />
                </div>
                <!-- End Col -->

                <div class="mt-5 sm:mt-10 lg:mt-0">
                    <div class="space-y-6 sm:space-y-8">
                        <!-- Title -->
                        <div class="space-y-2 md:space-y-4">
                            <h2 class="font-bold text-3xl text-light">
                                Meanwhile, we’re currently hiring in the
                                following areas:
                            </h2>
                            <p class="text-muted">
                                click to see
                            </p>
                        </div>
                        <!-- End Title -->

                        <!-- List -->
                        <ul class="space-y-2 sm:space-y-4">
                            {#each types as type, i}
                                <li>
                                    <button
                                        class="flex gap-x-3 cursor-pointer hover:bg-secondary transition-colors rounded-lg w-max pr-4"
                                        on:click={() => handleClick(type.id, i)}
                                    >
                                        <span
                                            class="mt-0.5 size-5 flex justify-center items-center rounded-full text-primary"
                                        >
                                            <svg
                                                class="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                ><polyline
                                                    points="20 6 9 17 4 12"
                                                /></svg
                                            >
                                        </span>
                                        <div class="grow">
                                            <span
                                                class="text-sm sm:text-base text-muted"
                                            >
                                                {type.label}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            {/each}
                        </ul>
                        <!-- End List -->
                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Features -->
    </div>
</section>
