import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "Illustration",
  description: "VP of Developer Experience at Vercel.",
};

export default function IllustrationBookPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Illustration Book Page</h1>
    </section>
  );
}
