"use client";

import { useForm, ValidationError } from "@formspree/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function ContactForm() {
  const [formState, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORM as string
  );

  if (formState.succeeded) {
    return (
      <div className="text-center mt-10 border py-6 rounded-sm">
        <div className="font-bold text-xl">Thanks for reaching out!</div>
        <p>{"We'll get back to you as soon as possible."}</p>
      </div>
    );
  }

  return (
    <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Your Email</label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={formState.errors}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <div className="mt-2">
          <textarea
            rows={6}
            id="message"
            name="message"
            placeholder="Enter your message here."
            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={formState.errors}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          disabled={formState.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
