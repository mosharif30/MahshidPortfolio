import About from "containers/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Mahshid Asoudehkhah",
};

export default function AboutPage() {
  return <About />;
}
