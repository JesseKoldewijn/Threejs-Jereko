"use client";

import { Github, List, ListChecks, User } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

const CommandMenuContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>(null!);

const CommandMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const down = (e: KeyboardEvent) => {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((open) => !open);
    }

    if (open) {
      const keyMatch = (key: string) => {
        if (e.key === key && (e.metaKey || e.ctrlKey)) {
          return e.key;
        }
      };

      switch (keyMatch(e.key)) {
        case "h": {
          e.preventDefault();
          router.push("/");
          setOpen(false);
          break;
        }
        case "m": {
          e.preventDefault();
          router.push("/about-me");
          setOpen(false);
          break;
        }
        case "p": {
          e.preventDefault();
          router.push("/projects");
          setOpen(false);
          break;
        }
        case "e": {
          e.preventDefault();
          router.push("/experience");
          setOpen(false);
          break;
        }
        case "b": {
          e.preventDefault();
          router.push("/blog");
          setOpen(false);
          break;
        }
        case "o": {
          window.open(
            "https://github.com/JesseKoldewijn/Threejs-Jereko",
            "_blank",
          );
          setOpen(false);
          break;
        }
        case "g": {
          window.open("https://github.com/JesseKoldewijn", "_blank");
          setOpen(false);
          break;
        }
        default:
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Home page</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>About Me</span>
              <CommandShortcut>⌘M</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <List className="mr-2 h-4 w-4" />
              <span>My Projects</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ListChecks className="mr-2 h-4 w-4" />
              <span>My Experience</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ListChecks className="mr-2 h-4 w-4" />
              <span>My Blog</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ListChecks className="mr-2 h-4 w-4" />
              <span>OpenSource</span>
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem>
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
              <CommandShortcut>⌘G</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      {children}
    </CommandMenuContext.Provider>
  );
};

export default CommandMenuProvider;

export const useCommandMenu = () => {
  const { open, setOpen } = useContext(CommandMenuContext);

  if (!open || !setOpen) {
    throw new Error("CommandMenu is not open");
  }

  return { open, setOpen };
};
