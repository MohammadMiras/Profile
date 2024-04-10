import { component$ } from "@builder.io/qwik";
// import FormContact from "./FormContact";
import GitHubIcon from "./Icons/GitHub";
import StackOverflowIcon from "./Icons/StackOverflow"
import TelegramIcon from "./Icons/Telegram";

const ContactUs = component$(() => {


    const classSocial = "w-[52px] h-[52px] grid place-items-center rounded-full text-3xl transition-all duration-500 hover:text-white hover:scale-110 hover:-translate-y-2 relative"

    const itemClass = "h-full flex flex-col justify-center items-center p-8 lg:py-6 border border-custom-color2 border-opacity-20 rounded-md dark:bg-dark gap-5 lg:gap-3"

    const itemTitleClass = "text-3xl lg:text-xl text-custom-color2 font-semibold"

    return <>
        <section
            id="contact"
            class="lg:pt-20 py-12 border-b dark:border-gray-700 border-gray-400  border-opacity-50"
        >
            <div class="max-w-7xl lg:max-w-7xl px-5 mx-auto text-gray-200">

                <div class="flex flex-col gap-5 items-center text-center mb-16 relative max-w-3xl mx-auto">
                    <h5 class="lg:text-2xl text-xl font-medium tracking-widest capitalize">Get in Touch</h5>
                    <h2 class="text-5xl font-bold text-custom-color2 capitalize">Ready to Collaborate?</h2>
                </div>
                <div class="grid lg:grid-cols-2 gap-12">
                    <div class="w-full">
                        <h2 class="text-3xl font-semibold mb-8">Contact Details</h2>
                        <div class="flex flex-col gap-2">

                            <div class={itemClass}>
                                <h4 class={itemTitleClass}>Address</h4>
                                <p class="text-3xl lg:text-xl">Karaj</p>
                            </div>

                            <div class={itemClass}>
                                <h4 class={itemTitleClass}>Email</h4>
                                <a
                                    href="mailto:mohammad.miras.1377@gmail.com"
                                    class="text-3xl lg:text-xl">
                                    mohammad.miras.1377@gamil.com
                                </a>
                            </div>

                            <div class={itemClass}>
                                <h4 class={itemTitleClass}>
                                    Phone
                                </h4>
                                <a
                                    href="tel:09398343878"
                                    class="text-3xl lg:text-xl">
                                    09398343878
                                </a>
                            </div>

                            <div class={itemClass}>
                                <h4 class={itemTitleClass}>
                                    Social Media</h4>
                                <div class="flex items-center gap-3 flex-wrap">
                                    <a
                                        target="_blank"
                                        class={`hover:bg-black group hover:text-white ${classSocial}`}
                                        href="https://github.com/MohammadMiras"
                                    >
                                        <GitHubIcon
                                            class="transition-all duration-500 fill-white group-hover:fill-white "
                                        />
                                    </a>

                                    <a
                                        target="_blank"
                                        class={`hover:bg-custom-color4 group ${classSocial}`}
                                        href="https://stackoverflow.com/users/19458490/mohammad-miras"
                                    >
                                        <StackOverflowIcon />
                                    </a>

                                    <a
                                        target="_blank"
                                        class={`group hover:bg-[#34aadf] ${classSocial}`}
                                        href="https://t.me/MohammadMiras"
                                    >
                                        <TelegramIcon />

                                    </a>

                                    <a
                                        target="_blank"
                                        class={`${classSocial} hover:text-white border-gray-700 border-gray-300 text-[#0a66c2] hover:bg-[#0a66c2] text-[#0a66c2] hover:bg-[#0a66c2]`}
                                        href="https://ir.linkedin.com/in/mohammad-miras-6ab936246"
                                    >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <FormContact />
                </div>
            </div >
        </section >

    </>

})

export default ContactUs
