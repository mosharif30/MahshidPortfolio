import GraphicProject from "containers/GraphicProject";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "Projects of Mahshid Asoudehkhah",
};
export default function ProjectPage() {
  return <GraphicProject />;
}
