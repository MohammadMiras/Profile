import { component$ } from "@builder.io/qwik";
import AboutUs from "~/components/AboutUs";
import ContactUs from "~/components/ContactUs";
import Header from "~/components/Header";
import Hero from "~/components/Hero"
import Skills from "~/components/Skills"

export default component$(() => {
    return (
        <div class="bg-custom-color1">
            <Header />
            <Hero />
            <Skills />
            <AboutUs />
            <ContactUs />
        </div>
    );
});

