<script lang="ts">
    import Globe from "./components/Globe.svelte";
</script>

<section id="company">
    <div class="container relative min-h-[60dvh] py-40 flex flex-col gap-6">
        <div class="space-y-4">
            <div class="w-32 text-muted pl-4 hover:text-primary lg:self-center lg:hidden"><Globe /></div>
            <h1 class="lg:text-7xl max-w-5xl">
                How Have You Changed the World Today?
            </h1>
        </div>
        <div class="flex flex-col lg:flex-row w-full justify-between gap-4">
            <div class="w-32 text-muted pl-4 hover:text-primary hidden lg:block self-center"><Globe /></div>
            <div
                class="relative z-0 w-full max-w-[64rem] self-end after:absolute after:w-[calc(100%_-_2px)] after:h-[calc(100%_-_2px)] after:bg-gradient-to-tl after:from-primary after:via-dark after:top-1 after:left-1 after:rounded"
            >
                <p
                    class="bg-dark pb-4 pr-4 lg:pb-10 lg:pr-10 lg:pl-32 lg:pt-20 relative z-10 text-xl leading-8 text-muted"
                >
                    We all seek a career that offers fulfillment - the chance to
                    bring our ideas to life and leave our mark on the world. At
                    datatech, we serve as the technological backbone of the
                    country. Our products power industries across the board,
                    both private and public, commercial and non-profit. It’s our
                    diligence, exceptional attention to detail, and unwavering
                    commitment to go the extra mile for our customers that make
                    a tangible difference in everyday life.
                </p>
            </div>
        </div>
    </div>
</section>
