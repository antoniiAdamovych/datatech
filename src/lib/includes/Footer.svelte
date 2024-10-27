<script lang="ts">
    import LogoFooter from "./components/LogoFooter.svelte";
</script>

<section>
    <div class="container">
        <!-- Contact Us -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto">
                <div class="text-center">
                    <h1
                        class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white"
                    >
                        Contact us
                    </h1>
                    <p class="mt-1 text-gray-600 dark:text-neutral-400">
                        We'd love to talk about how we can help you.
                    </p>
                </div>

                <div
                    class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16"
                >
                    <!-- Card -->
                    <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
                        <h2 class="mb-8 text-xl font-semibold text-light">
                            Fill in the form
                        </h2>

                        <form>
                            <div class="grid gap-4">
                                <!-- Grid -->
                                <div
                                    class="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    <div>
                                        <label
                                            for="hs-firstname-contacts-1"
                                            class="sr-only">First Name</label
                                        >
                                        <input
                                            type="text"
                                            name="hs-firstname-contacts-1"
                                            id="hs-firstname-contacts-1"
                                            class="py-3 px-4 block w-full border border-secondary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-opacity-20 bg-secondary text-muted placeholder-muted"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            for="hs-lastname-contacts-1"
                                            class="sr-only">Last Name</label
                                        >
                                        <input
                                            type="text"
                                            name="hs-lastname-contacts-1"
                                            id="hs-lastname-contacts-1"
                                            class="py-3 px-4 block w-full border border-secondary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-opacity-20 bg-secondary text-muted placeholder-muted"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <!-- End Grid -->

                                <div>
                                    <label
                                        for="hs-email-contacts-1"
                                        class="sr-only">Email</label
                                    >
                                    <input
                                        type="email"
                                        name="hs-email-contacts-1"
                                        id="hs-email-contacts-1"
                                        autocomplete="email"
                                        class="py-3 px-4 block w-full border border-secondary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-opacity-20 bg-secondary text-muted placeholder-muted"
                                        placeholder="Email"
                                    />
                                </div>

                                <div>
                                    <label
                                        for="hs-phone-number-1"
                                        class="sr-only">Phone Number</label
                                    >
                                    <input
                                        type="text"
                                        name="hs-phone-number-1"
                                        id="hs-phone-number-1"
                                        class="py-3 px-4 block w-full border border-secondary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-opacity-20 bg-secondary text-muted placeholder-muted"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                <div>
                                    <label
                                        for="hs-about-contacts-1"
                                        class="sr-only">Details</label
                                    >
                                    <textarea
                                        id="hs-about-contacts-1"
                                        name="hs-about-contacts-1"
                                        rows="4"
                                        class="py-3 px-4 block w-full border border-secondary rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-opacity-20 bg-secondary text-muted placeholder-muted"
                                        placeholder="Details"
                                    ></textarea>
                                </div>
                            </div>
                            <!-- End Grid -->

                            <div class="mt-4 grid">
                                <button
                                    type="submit"
                                    class="w-full bg-secondary bg-opacity-20 border border-secondary hover:border-secondary hover:bg-opacity-40 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none"
                                    >Send inquiry</button
                                >
                            </div>

                            <div class="mt-3 text-center">
                                <p
                                    class="text-sm text-gray-500 dark:text-neutral-500"
                                >
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                    <!-- End Card -->

                    <div
                        class="divide-y divide-gray-200 dark:divide-neutral-800"
                    >
                        <!-- Icon Block -->
                        <div class="flex gap-x-7 py-6">
                            <svg
                                class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><circle cx="12" cy="12" r="10" /><path
                                    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                /><path d="M12 17h.01" /></svg
                            >
                            <div class="grow">
                                <h3
                                    class="font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    Knowledgebase
                                </h3>
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-neutral-500"
                                >
                                    We're here to help with any questions or
                                    code.
                                </p>
                                <a
                                    class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#"
                                >
                                    Contact support
                                    <svg
                                        class="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <div class="flex gap-x-7 py-6">
                            <svg
                                class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><path
                                    d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"
                                /><path
                                    d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
                                /></svg
                            >
                            <div class="grow">
                                <h3
                                    class="font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    FAQ
                                </h3>
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-neutral-500"
                                >
                                    Search our FAQ for answers to anything you
                                    might ask.
                                </p>
                                <a
                                    class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#"
                                >
                                    Visit FAQ
                                    <svg
                                        class="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <div class=" flex gap-x-7 py-6">
                            <svg
                                class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><path
                                    d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
                                /><path
                                    d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
                                /></svg
                            >
                            <div class="grow">
                                <h3
                                    class="font-semibold text-gray-800 dark:text-neutral-200"
                                >
                                    Contact us by email
                                </h3>
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-neutral-500"
                                >
                                    If you wish to write us an email instead
                                    please use
                                </p>
                                <a
                                    class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#"
                                >
                                    support@datatech.com
                                </a>
                            </div>
                        </div>
                        <!-- End Icon Block -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact Us -->
    </div>
</section>
<!-- ========== FOOTER ========== -->
<footer class="relative overflow-hidden bg-dark">
    <svg
        class="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
        width="2745"
        height="488"
        viewBox="0 0 2745 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
        <path
            d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
            class="stroke-neutral-700/50"
            stroke="currentColor"
        />
    </svg>

    <div class="relative z-10">
        <div class="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div class="inline-flex items-center">
                <!-- Logo -->
                <div>
                    <LogoFooter />
                </div>
                <!-- End Logo -->

                <div class="border-s border-neutral-700 ps-5 ms-5">
                    <p class="text-sm text-neutral-400">
                        © 2024 datatech Inc.
                    </p>
                    <a
                        class="text-sm text-neutral-400 underline"
                        href="/imprint">Legal Notice</a
                    >
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- ========== END FOOTER ========== -->
