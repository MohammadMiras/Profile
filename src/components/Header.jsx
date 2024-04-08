import { component$ } from "@builder.io/qwik";

const Header = component$(() => {

    return <div class="bg-custom-color1">
        <header class="shadow-md text-gray-200">
            <div class="max-w-7xl lg:max-w-7xl px-5 mx-auto relative py-.5 md:py-3">
                <div class="flex items-center justify-between gap-12 w-full py-5 lg:py-0">
                    <a class="w-[200px] sm:w-[120px] md:w-[160px] aspect-[1/.2] md:aspect-[1/.4] " href="#home">
                        <img
                            alt="Logo"
                            class=" w-full h-full object-cover"
                            loading="lazy"
                            src="https://mohammadmiras-ir.s3.ir-thr-at1.arvanstorage.ir/Home/Logo2.webp"
                        />
                    </a>
                    <button class="block lg:hidden text-4xl">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                    <nav class="flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:relative absolute top-full left-0 lg:w-fit w-full rounded-md px-[20px] lg:p-0 opacity-0 -translate-y-full invisible lg:opacity-100 lg:visible lg:translate-y-0 transition-all duration-500 ">
                        <ul class="flex flex-col lg:flex-row items-center lg:gap-10 gap-5 lg:bg-transparent w-full lg:w-fit py-10 lg:mr-0 -mr-[40px] lg:border-opacity-100" >
                            <li class="relative">
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium active" href="/#home">Home</a></li>
                            <li class="relative">
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium" href="/#about">About Me</a></li>
                            <li class="relative">
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium" href="/#services">Services</a></li>
                            <li class="relative">
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium" href="/#portfolio">Portfolio</a>
                            </li>
                            <li class="relative" >
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium" href="/#pricing">Pricing</a></li>
                            <li class="relative" >
                                <a class="tracking-widest lg:hover:text-custom-color2 transition-all duration-500 font-medium" href="/#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    </div >
})
export default Header
