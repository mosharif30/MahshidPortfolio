import Project from "containers/Project";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "Projects of Mahshid Asoudehkhah",
};
export default function ProjectPage() {
  return <Project />;
}
