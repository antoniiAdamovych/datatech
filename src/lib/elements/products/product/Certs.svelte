<section>
    <div class="container">
        <!-- Clients -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Title -->
            <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
                <h2 class="text-xl font-semibold md:text-2xl md:leading-tight">
                    Certifications and Compliance
                </h2>
            </div>
            <!-- End Title -->

            <!-- Grid -->
            <div
                class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6"
            >
                {#each { length: 9 } as _, i}
                    <div
                        class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800"
                    >
                        <img class="bg-white aspect-square object-contain" src={`/img/products/cert/cert${i+1}.png`} alt="">
                    </div>
                {/each}
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Clients -->
    </div>
</section>
