import { component$ } from "@builder.io/qwik";
import { useFormLoader } from "../routes/index"
import { $, component$ } from '@builder.io/qwik';
import { formAction$, useForm, valiForm$ } from '@modular-forms/qwik';
import { email, minLength, object, string } from 'valibot';

const LoginSchema = object({
    email: string([
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    name: string([
        minLength(1, 'Please enter your name.'),
    ]),
    message: string([
        minLength(1, 'Please enter your message.'),
    ]),
});

export const useFormAction = formAction$((values) => {
    // Runs on server
}, valiForm$(LoginSchema));

const FormContact = component$(() => {

    const [form, { Form, Field }] = useForm({
        loader: useFormLoader(),
        action: useFormAction(),
        validate: valiForm$(LoginSchema),
    });

    const handleSubmit = $((values, event) => {


        fetch("https://formbold.com/s/9gpKl",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(values)
            })
            .then(res => { console.log(res) })
            .catch(res => { console.log(res) })
    });

    const classInput = "bg-transparent shadow appearance-none border dark:border-custom-color2 dark:border-opacity-50 border-gray-200 border-opacity-30 w-full py-4 px-6 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline rounded-md"

    const showError = (field) => {

        return <div class="h-2 text-red-800"> {field.error && field.error}</div>
    }
    return <div class="w-full">
        <h2 class="text-3xl font-semibold mb-8">Let's Talk Now</h2>
        <div>
            <Form onSubmit$={handleSubmit}>
                <div class="bg-custom-color1 bg-opacity-100 dark:bg-opacity-70 shadow-md rounded px-8 pt-6 pb-8 border dark:border-custom-color2 border-gray-200 border-opacity-50 dark:border-opacity-30">
                    <Field name="name">
                        {(field, props) => (
                            <div class="mb-8">
                                <label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name</label>
                                <input
                                    class={classInput}
                                    {...props}
                                    type="name"
                                    value={field.value}
                                    placeholder="Your Name"
                                />
                                {showError(field)}
                            </div>
                        )}
                    </Field>
                    <Field name="email">
                        {(field, props) => (
                            <div class="mb-8">
                                <label
                                    class="block text-gray-300 text-sm font-bold mb-2"
                                    for="email">
                                    Email
                                </label>
                                <input
                                    class={classInput}
                                    {...props}
                                    value={field.value}
                                    placeholder="Your Email"
                                />
                                {showError(field)}
                            </div>
                        )}
                    </Field>
                    <Field name="message">
                        {(field, props) => (
                            <div class="mb-8">
                                <label class="block text-gray-300 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    class={`${classInput}  max-h-24 min-h-[96px]`}
                                    {...props}
                                    value={field.value}
                                    placeholder="Your massage"
                                />
                                {showError(field)}
                            </div>
                        )}
                    </Field>
                    <div class="flex items-center justify-between">
                        <button class="z-10 border border-custom-color2 after:absolute after:w-1/2 after:h-full after:bg-custom-color2 after:top-0 after:start-0 after:-z-10 relative py-5 px-8 hover:after:w-full transition-all after:transition-all font-bold text-xl after:duration-500 text-lg font-medium py-3"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    </div>
})

export default FormContact
