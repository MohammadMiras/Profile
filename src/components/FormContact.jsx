import { component$ } from "@builder.io/qwik";

const FormContact = component$(() => {

    return <div class="w-full">
        <h2 class="text-3xl font-semibold mb-8">Let's Talk Now</h2>
        <div>
            <form action="https://formbold.com/s/9gpKl" method="POST" class="bg-custom-color1 bg-opacity-100 dark:bg-opacity-70 shadow-md rounded px-8 pt-6 pb-8 border dark:border-custom-color2 border-gray-200 border-opacity-50 dark:border-opacity-30">
                <div class="mb-8">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name</label>
                    <input class="bg-transparent shadow appearance-none border dark:border-custom-color2 dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        name="subject"
                    />
                </div>
                <div class="mb-8">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="email">Email</label>
                    <input
                        class="bg-transparent shadow appearance-none border dark:border-custom-color2 dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md"
                        name="email"
                        type="email"
                        placeholder="Your Email" />
                </div>
                <div class="mb-8">
                    <label class="block text-gray-300 text-sm font-bold mb-2" for="message">Message
                    </label>
                    <textarea
                        class="bg-transparent shadow appearance-none border dark:border-custom-color2 dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md max-h-24 min-h-[96px]"
                        name="message"
                        type="text"
                        placeholder="Your Message"
                    />

                </div>
                <div class="flex items-center justify-between">
                    <button class="z-10 border border-custom-color2 after:absolute after:w-1/2 after:h-full after:bg-custom-color2 after:top-0 after:start-0 after:-z-10 relative py-5 px-8 hover:after:w-full transition-all after:transition-all font-bold text-xl after:duration-500 text-lg font-medium py-3"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
})

export default FormContact
