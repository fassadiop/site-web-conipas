"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Le CONIPAS", href: "/conipas" },
  { label: "Gouvernance", href: "/gouvernance" },
  { label: "Pêche artisanale", href: "/peche-artisanale" },
  { label: "Actions", href: "/actions" },
  { label: "Données", href: "/donnees" },
  { label: "Ressources", href: "/ressources" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-conipas.jpeg"
              alt="Logo CONIPAS"
              width={150}
              height={80}
              priority
            />
            {/* <span className="font-bold text-sm md:text-base text-gray-900">
              CONIPAS
            </span> */}
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition font-medium ${
                    isActive
                      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Bouton mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md border p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-medium ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
