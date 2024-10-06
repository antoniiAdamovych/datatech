<script lang="ts">
    import { data, types } from "./data";
    import ChevrofDown from "$lib/includes/components/ChevrofDown.svelte";

    let activePage = 1;
    let perPage = 9;

    let activeTypes = types.map((type) => {
        return { ...type, active: false };
    });

    $: jobs = activeTypes.some((type) => type.active)
        ? data.jobs.filter((job) =>
              activeTypes.some((type) => type.id == job.type && type.active),
          )
        : data.jobs;
    $: activeJobs = paginate(jobs, activePage, perPage, activeTypes);

    function paginate(jobs, activePage, perPage, activeTypes) {
        const startIndex = (activePage - 1) * perPage;
        const paginatedJobs = jobs.slice(startIndex, startIndex + perPage);
        return paginatedJobs;
    }

    function HandlePageChange(newPage: number) {
        activePage = newPage;
    }

    function HandleTypeChange(i) {
        activeTypes[i].active = !activeTypes[i].active;
        activePage = 1;
    }

    let openFilter = false;
</script>

<section class="py-40">
    <div class="container space-y-10">
        <div class="relative z-20">
            <button on:click={() => openFilter = !openFilter} class="flex items-center gap-2 px-4 py-2 border border-secondary rounded-lg">Job Area <span class="block w-4"><ChevrofDown /></span></button>
            <div
                class={` ${openFilter ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity flex absolute top-[120%] bg-dark flex-col py-2 px-1 items-start gap-1 border border-secondary rounded w-max`}
                action=""
            >
                {#each activeTypes as type, i}
                    <button
                        on:click={() => HandleTypeChange(i)}
                        class={` ${type.active ? "before:bg-muted hover:before:bg-secondary" : "before:bg-transparent"} relative w-full text-left rounded-lg pl-10 pr-2 py-2 text-sm cursor-pointer transition-colors text-muted hover:text-dark hover:bg-muted after:absolute after:w-5 after:aspect-square after:left-2 after:border after:border-secondary after:rounded after:top-1/2 after:-translate-y-1/2 before:w-3 before:absolute before:aspect-square before:top-1/2 before:-translate-y-1/2 before:left-[calc(0.5rem_+_(1.25rem_/_2)_-(0.75rem_/_2))] before:transition-colors before:rounded`}
                    >
                        {type.label}
                    </button>
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-4">
            {#each activeJobs as job}
                <a
                    href="#"
                    class="flex items-center justify-between gap-4 px-4 py-2 border border-secondary rounded-lg transition-colors duration-300 hover:bg-secondary cursor-pointer"
                >
                    <h3 class="w-1/4">{job.label}</h3>
                    <p class="w-1/2">
                        {#if job.locations && job.locations.length > 0}
                            {#each job.locations as loc, i}
                                {loc}{i + 1 == job.locations.length ? "" : "; "}
                            {/each}
                        {/if}
                    </p>
                    <p class="w-1/4 text-right">
                        {#each job.workTime as workTime, i}
                            {workTime}{i + 1 == job.workTime.length
                                ? ""
                                : " & "}
                        {/each}
                    </p>
                </a>
            {/each}
        </div>
        <div class="flex gap-2 justify-center">
            {#if Math.ceil((jobs.length + 1) / perPage) > 1}
                {#each { length: Math.ceil((jobs.length + 1) / perPage) } as _, i}
                    <button
                        on:click={() => HandlePageChange(i + 1)}
                        class={`${activePage == i + 1 ? "bg-secondary" : ""} w-8 aspect-square border border-secondary transition-colors duration-300 rounded-lg grid place-content-center hover:bg-secondary`}
                        >{i + 1}</button
                    >
                {/each}
            {/if}
        </div>
    </div>
</section>
