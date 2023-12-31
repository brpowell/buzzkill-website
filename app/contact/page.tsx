import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us for questions, comments or feedback.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-semibold text-gray-900 text-center my-6">
          Contact
        </h1>
        <p className="text-center">
          {
            "Questions, comments, or feedback? Send a message and we'll get back to you as soon as possible."
          }
        </p>
        <form className="mt-8 space-y-6" action="#" method="POST">
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
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <div className="mt-2">
              <textarea
                rows={4}
                name="message"
                id="message"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
