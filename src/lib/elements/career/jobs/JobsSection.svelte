<script lang="ts">
    import { data, types, type job, type jobType } from "./data";
    import ChevrofDown from "$lib/includes/components/ChevrofDown.svelte";
    import { onMount } from "svelte";

    let activePage = 1;
    let perPage = 10;

    interface activeType extends jobType {
        active: boolean;
    }

    let activeTypes: activeType[] = types.map((type) => {
        return { ...type, active: false };
    });

    $: jobs = FilterJobs(activeTypes);
    $: activeJobs = paginate(jobs, activePage, perPage, activeTypes);

    function paginate(
        jobs: job[],
        activePage: number,
        perPage: number,
        activeTypes: activeType[],
    ) {
        const startIndex = (activePage - 1) * perPage;
        const paginatedJobs = jobs.slice(startIndex, startIndex + perPage);
        return paginatedJobs;
    }

    function FilterJobs(activeTypes: activeType[]) {
        return activeTypes.some((type) => type.active)
            ? data.jobs.filter((job) =>
                  activeTypes.some(
                      (type) => type.id == job.type && type.active,
                  ),
              )
            : data.jobs;
    }

    function HandlePageChange(newPage: number) {
        activePage = newPage;
    }

    function HandleTypeChange(i: number) {
        activeTypes[i].active = !activeTypes[i].active;
        activePage = 1;
    }

    let openFilter = false;

    onMount(() => {
        window.addEventListener("typeclicked", (e: any) => {
            const id = e.detail.id;

            for (let i = 0; i < activeTypes.length; i++) {
                activeTypes[i].active = false;
            }

            if (id && activeTypes.some((type) => type.id == id)) {
                activeTypes[e.detail.i].active = true;
            }
        });
    });
</script>

<section class="py-40" id="jobs">
    <div class="container space-y-10">
        <div class="relative z-20">
            <button
                on:click={() => (openFilter = !openFilter)}
                class="flex items-center gap-2 px-4 py-2 border border-secondary rounded-lg relative"
            >
                {#if activeTypes.some((type) => type.active)}
                    <span
                        class="absolute -top-2 -right-2 grid text-xs place-content-center w-6 aspect-square rounded-full border border-secondary bg-dark"
                        >{activeTypes.filter((type) => type.active)
                            .length}</span
                    >
                {/if}

                Job Area
                <span
                    class={`${openFilter ? "rotate-180" : "rotate-0"} block w-4 transition-transform duration-300`}
                    ><ChevrofDown /></span
                ></button
            >
            <div
                class={` ${openFilter ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity max-h-40 overflow-y-auto flex absolute top-[120%] bg-dark flex-col py-2 px-1 items-start gap-1 border border-secondary rounded w-max`}
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
        <div class="flex gap-4 flex-wrap">
            {#if activeJobs && activeJobs.length > 0}
                {#each activeJobs as job}
                    <a
                        href="/career/jobs/data-scientist"
                        class="flex flex-wrap w-full lg:w-[calc(50%_-_1rem)] items-center justify-between gap-4 px-4 py-2 border border-secondary rounded-lg transition-colors duration-300 hover:bg-opacity-20 hover:bg-secondary cursor-pointer"
                    >
                        <h3 class="w-full">{job.label}</h3>
                        <ul class="w-full flex gap-2">
                            {#each job.skills as skill}
                                <li
                                    class="text-xs px-4 py-2 border border-secondary bg-opacity-50 bg-secondary rounded-full grid place-content-center transition-all duration-300 hover:-translate-y-1 hover:-translate-x-px hover:shadow hover:shadow-primary"
                                >
                                    {skill}
                                </li>
                            {/each}
                        </ul>
                        <p class="w-[calc(50%_-_1rem)] text-muted text-sm">
                            {#if job.locations && job.locations.length > 0}
                                {#each job.locations as loc, i}
                                    {loc}{i + 1 == job.locations.length
                                        ? ""
                                        : "; "}
                                {/each}
                            {/if}
                        </p>
                        <p
                            class="w-[calc(50%_-_1rem)] flex gap-2 items-center justify-end text-muted text-sm"
                        >
                            {#each job.workTime as workTime, i}
                                {workTime}{i + 1 == job.workTime.length
                                    ? ""
                                    : " & "}
                            {/each}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="size-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </span>
                        </p>
                    </a>
                {/each}
            {:else}
                <p class="text-2xl">No jobs found 😭</p>
            {/if}
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
