import type { Metadata } from "next";
import {
  LinkedinIcon,
  InstagramIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};
const Mailto = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </a>
  );
};
export default function AboutPage() {
  return (
    <section className="w-full md:w-1/2 bg-white ml-auto h-full justify-center">
      <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
        Mail me!
      </Mailto>
      ,
      {/* <div className="prose prose-neutral dark:prose-invert text-white dark:text-neutral-200">
        <p>
          Lorem ipsum dolor sit amet consectetur
          <b> adipisicing elit. Modi est dolore</b>
          neque provident nulla voluptatem?
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          architecto. Praesentium nisi impedit iure perferendis id ratione ad
          dolores, obcaecati iste provident quaerat quibusdam et debitis minima
          quod fugit aspernatur excepturi. Voluptatem aperiam quia beatae
          voluptatibus ut. Dolores, consequatur delectus commodi eaque
          recusandae molestiae, eum aliquam pariatur minima, cum id!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id autem
          quidem ad, facere obcaecati!
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nulla
          ratione porro saepe? Rerum mollitia laudantium consectetur veritatis
          maxime dolorem quas perspiciatis autem repudiandae enim optio possimus
          similique, aut repellat.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-white dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-white dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon />
              <div className="ml-3">Linkedin</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-white dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <InstagramIcon />
              <div className="ml-3">Instagram</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div> */}
    </section>
  );
}
