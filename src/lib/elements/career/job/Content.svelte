<script lang="ts">
    import { data } from "./data";
</script>

<section>
    <div class="container">
        {#each data.sections as section}
            <div class="w-max mx-auto">
                <h2 class="text-2xl lg:text-3xl my-10">
                    {section.title}
                </h2>
                <!-- List -->
                <div>
                    {#each section.content.data as skill}
                        <div class="px-4 pt-2 pb-4 rounded-xl hover:bg-opacity-20 transition-colors hover:bg-secondary">
                            <dl
                                class="flex my-1 flex-col sm:grid sm:grid-cols-[30%_70%] gap-1 sm:max-w-[900px]"
                            >
                                <dt class="min-w-40">
                                    <span class="block text-sm text-muted"
                                        >{skill.name}:</span
                                    >
                                </dt>
                                <dd>
                                    <p class="text-sm max-w-[calc(100vw_-_2rem)]">{skill.description}</p>
                                </dd>
                            </dl>
                            <hr class="w-full border-secondary mt-6" />
                        </div>
                    {/each}
                </div>
                <!-- End List -->
            </div>
        {/each}
    </div>
</section>
