import type { Metadata } from "next";

import Contact from "containers/Contact";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Contact Mahshid Asoudehkhah",
};

export default function ContactPage() {
  return <Contact />;
}
