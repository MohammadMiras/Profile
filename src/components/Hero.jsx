import { component$ } from "@builder.io/qwik";

const Hero = component$(() => {

    return <>
        <section class="flex content-center overflow-hidden text-gray-200 py-16 lg:h-[70vh]">
            <div class="max-w-7xl lg:max-w-7xl px-5 mx-auto relative flex flex-col-reverse lg:flex-row items-center lg:gap-12 gap-24">
                <div class="lg:w-1/2 flex flex-col gap-4">
                    <div>
                        <h2 class="text-3xl mb-4 tracking-widest mb-8 lg:mb-0">
                            Hello I'm
                            <span class="font-bold text-custom-color2"> Mohammad Miras</span>
                        </h2>
                        <p class="text-custom-color2 text-5xl lg:text-3xl font-bold mt-5">Full Stack Web Developer</p>
                    </div>
                    <div>
                        <p class="text-2xl lg:text-xl text-justify mb-5 leading-loose">
                            As you can read above, I am an interdisciplinary developer. I have experience working with professional teams in the fields of front-end and back-end. My main expertise is in the field of back-end
                        </p>
                    </div>
                    <div class="my-5">
                        <a class="z-10 border border-custom-color2 after:absolute after:w-1/2 after:h-full after:bg-custom-color2 after:top-0 after:start-0 after:-z-10 relative py-5 px-8 hover:after:w-full transition-all after:transition-all font-bold text-xl after:duration-500" href="#contact">
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div class="w-3/4 lg:w-1/2 relative mx-5 z-10">
                    <div>
                        <img
                            class="w-full object-cover h-[800px] lg:h-full rounded-md border border-gray-200"
                            src="https://mohammadmiras-ir.s3.ir-thr-at1.arvanstorage.ir/Home/Person.webp"
                            alt="Seyed Mohammad Mohammad Miras"
                        />
                        <div class="absolute inset-5 w-full h-full bg-custom-color2 rounded-md -z-10">
                        </div>
                        <div class="absolute -inset-5 w-full h-full bg-custom-color2 rounded-md -z-10">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
})

export default Hero
