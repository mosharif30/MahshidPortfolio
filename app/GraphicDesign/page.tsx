import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "GraphicDesign",
  description: "VP of Developer Experience at Vercel.",
};

export default function GraphicDesignPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Graphic Design Page</h1>
    </section>
  );
}
