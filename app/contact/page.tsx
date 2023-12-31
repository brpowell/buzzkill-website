import { Metadata } from "next";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Buzzkill.tips",
  description: "Contact us for questions, comments or feedback.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md px-8">
        <h1 className="text-4xl font-semibold text-gray-900 text-center my-6">
          Contact
        </h1>
        <p className="text-center">
          {
            "Questions, comments, or feedback? Send a message and we'll get back to you as soon as possible."
          }
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
