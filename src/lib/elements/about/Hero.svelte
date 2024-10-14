<script lang="ts">
    import Rocket from "./components/Rocket.svelte";
</script>

<section id="company">
    <div class="container relative min-h-[60dvh] py-40 flex flex-col gap-6">
        <div class="space-y-4">
            <div
                class="w-32 text-muted pl-4 hover:text-primary lg:self-center lg:hidden"
            ><Rocket /></div>
            <h1 class="lg:text-7xl max-w-5xl">Hey, we are datatech!</h1>
        </div>
        <div class="flex flex-col lg:flex-row w-full justify-between gap-4">
            <div
                class="w-32 pl-4 hidden lg:block self-center"
            ><Rocket /></div>
            <div
                class="relative z-0 w-full max-w-[64rem] self-end after:absolute after:w-[calc(100%_-_2px)] after:h-[calc(100%_-_2px)] after:bg-gradient-to-tl after:from-primary after:via-dark after:top-1 after:left-1 after:rounded"
            >
                <p
                    class="bg-dark pb-4 pr-4 lg:pb-10 lg:pr-10 lg:pl-32 lg:pt-20 relative z-10 text-xl leading-8 text-muted"
                >
                    At the heart of innovation, we’re not just connecting
                    devices, we’re connecting people to the <b>future</b>. With
                    cutting-edge technology and a passion for seamless
                    integration, our mission is to redefine what it means to
                    stay connected in a fast-paced world. Driven by creativity
                    and fueled by curiosity, we’re shaping tomorrow’s tech with
                    today’s energy
                </p>
            </div>
        </div>
    </div>
</section>
