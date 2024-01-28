"use client";

import { ArrowUp, Github } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app";

const Footer = ({
  topSlot,
  innerSlot,
}: {
  topSlot: React.ReactNode;
  innerSlot: React.ReactNode;
}) => {
  const getYear = () => {
    const initialYear = 2023;

    return initialYear === new Date().getFullYear()
      ? initialYear
      : `${initialYear} - ${new Date().getFullYear()}`;
  };

  return (
    <div className="mt-20">
      {topSlot}
      <footer className="mx-4 flex w-auto flex-col gap-4 rounded-t-2xl border-x border-t border-neutral-300 bg-neutral-100 px-4 py-10 dark:border-neutral-700 dark:bg-neutral-900 md:px-6 lg:mx-8 lg:gap-2 lg:py-12">
        {innerSlot}
        <div className="mx-5 flex flex-col items-center justify-center px-8 text-sm">
          <Link
            aria-label="Instagram"
            className="rounded-lg p-1 text-neutral-800 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-400"
            href="https://github.com/JesseKoldewijn"
            target="_blank"
            data-link-label="github-link-footer"
          >
            <Github />
            <span className="sr-only">Link to Github profile</span>
          </Link>
        </div>
        <div className="my-2 flex flex-col justify-center gap-2">
          <div className="mb-4 mt-3 flex justify-center gap-2">
            <span className="border-r-2 pr-2 text-neutral-800 dark:text-neutral-300">
              {getYear()}
            </span>
            <span className="font-semibold">
              {appConfig.branding.brandName}
            </span>
          </div>
          <Button
            className="mx-auto rounded-lg px-2 py-1 text-neutral-800 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-400"
            variant="ghost"
            onClick={() =>
              typeof window && window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <ArrowUp className="m-auto h-5 w-5" height={5} width={5} />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
