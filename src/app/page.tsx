import type { Metadata } from "next";
import React, { Suspense } from "react";

import dynamic from "next/dynamic";

import HeroSection from "@/components/layout/sections/HeroSection";
import Avatar from "@/images/avatar.webp";

const IntroSection = dynamic(
  () => import("@/components/layout/sections/IntroSection"),
  {
    ssr: true,
  },
);

export const metadata: Metadata = {
  title: "Jereko - My personal website | Jesse Koldewijn",
  description:
    "My personal website. This website is used to showcase my projects, experience and volunteering. I also use this website to showcase my skills in web development, events I've attended and possibly also a dev blog in the future.",
  openGraph: {
    title: "Jereko",
    description: "My personal website.",
    url: "https://jereko.dev",
  },
};

const Home = async () => {
  return (
    <>
      <HeroSection
        bannerImage={{
          dark: Avatar,
          light: Avatar,
        }}
        bannerContent={{
          title: "Jereko",
          description: "My personal website.",
        }}
      />
      <section className="mx-auto flex w-full max-w-lg flex-col items-center gap-8 px-4 pt-0 text-center md:pt-5 lg:pt-10">
        <h2 className="text-md font-semibold md:text-xl">
          Thanks for visiting my personal website!
        </h2>
        <p className="text-neutral-600 dark:text-neutral-200">
          This website is used to showcase my projects, experience and
          volunteering. I also use this website to showcase my skills in web
          development, events I&apos;ve attended and possibly also a dev blog in
          the future.
        </p>
      </section>
      <section className="mx-auto flex w-full max-w-lg flex-col items-center gap-8 px-4 py-20 text-center">
        <h2 className="text-md font-semibold md:text-xl">
          A short introduction about me
        </h2>
        <Suspense>
          <IntroSection />
        </Suspense>
      </section>
      <section className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <h3 className="text-md font-semibold md:text-xl">
          Speaking about events I&apos;ve attended...
        </h3>
        <p className="mt-4 text-neutral-600 dark:text-neutral-200">
          Down below is the latest event I&apos;ve attended
        </p>
      </section>
    </>
  );
};

export default Home;
