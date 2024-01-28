import { cn } from "@/lib/utils";
import { getAgeByDateString } from "@/utils/age";
import { animatedGradient } from "@/utils/prog-classes";

const IntroSection = async () => {
  const myAge = getAgeByDateString("1999-02-15");

  return (
    <p className="text-neutral-600 dark:text-neutral-200">
      My name is{" "}
      <span className={cn(animatedGradient(), "font-bold")}>
        Jesse Koldewijn
      </span>
      , I&apos;m a {myAge} year old gamer, software engineer and tech
      enthusiast.
    </p>
  );
};

export default IntroSection;
