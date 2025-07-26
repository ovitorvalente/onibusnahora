"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { House, Map, Settings, Star } from "lucide-react";
import Link from "next/link";

const navegationBarOptions = [
  {
    icon: <House />,
    label: "Home",
    active: "home",
  },
  // {
  //   icon: <Map />,
  //   label: "Localização",
  //   active: "location",
  // },
  {
    icon: <Star />,
    label: "Favoritos",
    active: "favorites",
  },
  // {
  //   icon: <Settings />,
  //   label: "Configurações",
  //   active: "settings",
  // },
];
export function NavegationBarComponent() {
  const [active, setActive] = useState("home");

  const handleActive = (active: string) => {
    setActive(active);
  };

  return (
    <div className="fixed right-0 bottom-4 left-0 z-50 mx-auto w-fit rounded-full bg-white p-2 shadow-2xl dark:bg-zinc-800">
      <nav className="flex items-center justify-center gap-4">
        {navegationBarOptions.map((item) => (
          <Button
            key={item.active}
            asChild
            variant={active === item.active ? "default" : "ghost"}
            size="lg"
            className="rounded-full"
            onClick={() => handleActive(item.active)}
          >
            <Link href={`/${item.active}`} className="flex items-center gap-1">
              {item.icon}
              <span
                className={`${active === item.active ? "font-bold" : "sr-only"}`}
              >
                {item.label}
              </span>
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
}
