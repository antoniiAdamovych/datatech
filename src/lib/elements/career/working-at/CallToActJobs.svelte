<script lang="ts">
    import { onMount } from "svelte";
    
    let isInteres = false;
    let procent = 50;

    onMount(() => {
        const body = document.querySelector("body");

        const d = body?.getBoundingClientRect();

        

        window.onscroll = (e) => {
            if(!d?.height) return;
            isInteres = window.scrollY / d.height * 100 > procent
        }
    })
</script>

<div
    class={`mt-12 flex w-[calc(100%_-_2rem)] justify-center fixed bottom-4 left-1/2 -translate-x-1/2 duration-500 transition-opacity z-50 ${isInteres ? "opacity-100" : "opacity-0"}`}
>
    <div class="border py-2 px-3 rounded-full border-neutral-700 bg-dark">
        <div class="flex items-center gap-x-3">
            <span class="text-sm text-gray-500 dark:text-neutral-500"
                >Interested? Want to get to know us better?</span
            >
            <a
                class="inline-flex items-center gap-x-2 text-sm font-medium text-primary"
                href="/career/jobs"
            >
                Job Openings
                <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
                >
            </a>
        </div>
    </div>
</div>