"use client";

import { Switch } from "@/components/ui/switch";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Evita hidratação incorreta
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Fechar menu com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevenir scroll do body quando menu está aberto
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, closeMenu]);

  const menuItems = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "HISTÓRIAS",
      href: "/historias",
    },
    {
      name: "MAPAS",
      href: "https://observatorio-nacional.vercel.app/projetos/geoportal",
    },
    {
      name: "CATÁLOGO DE DADOS",
      href: "/catalogo-de-dados",
    },
    {
      name: "PROJETOS",
      hasSubItems: true,
      subItems: [
        {
          name: "OBSERVATÓRIO NACIONAL",
          href: "https://observatorio-nacional.vercel.app/",
          description: "OBSERVATÓRIO NACIONAL DE MOBILIDADE SUSTENTÁVEL",
        },
        // Adicione mais projetos aqui no futuro
      ],
    },
    {
      name: "SOBRE",
      href: "/sobre",
    },
  ];

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 py-6 transition-colors">
        <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 mx-auto">
          {/* Lado esquerdo - Logos */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <Image
              src="/insper_logo.png"
              alt="Logo Portal Cidados"
              width={150}
              height={22}
              className="h-auto md:w-60 w-50"
            />
          </div>

          {/* Lado direito - Switch e Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {mounted && (
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            )}
            <button
              type="button"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Full Screen */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Header do menu com X */}
        <div className="flex justify-end p-6">
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-8 w-8 text-black dark:text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-end justify-center h-full px-8 pb-32 space-y-8">
          {menuItems.map((item, index) => {
            // Se o item tem sub-itens (como PROJETOS)
            if (item.hasSubItems && item.subItems) {
              return (
                <div
                  key={item.name}
                  className={`group/parent text-right transition-all duration-500 ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className={`font-gt-ultra transition-all duration-300 text-gray-500 dark:text-gray-400 font-medium text-3xl md:text-5xl cursor-pointer group-hover/parent:text-foreground`}
                  >
                    {item.name}
                  </div>
                  {/* Sub-items */}
                  <div className="mt-4 space-y-4 max-h-0 opacity-0 overflow-hidden group-hover/parent:max-h-[500px] group-hover/parent:opacity-100 transition-all duration-500 ease-in-out">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={closeMenu}
                        className="group/sub block"
                      >
                        <div className="font-gt-ultra text-2xl md:text-3xl font-medium text-gray-500 dark:text-gray-400 group-hover/sub:text-black dark:group-hover/sub:text-white transition-all duration-300">
                          {subItem.name}
                        </div>
                        {subItem.description && (
                          <div className="font-gt-ultra text-right text-xl md:text-2xl font-medium text-black dark:text-white transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0 group-hover/sub:max-h-8 group-hover/sub:opacity-100 group-hover/sub:mt-1">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Para itens normais sem sub-itens
            return (
              <Link
                key={item.name}
                href={item.href || "#"}
                onClick={closeMenu}
                className={`group block text-right transition-all duration-500 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={`font-gt-ultra transition-all duration-300 group-hover:text-foreground ${
                    pathname === item.href
                      ? "text-black dark:text-white font-medium text-3xl md:text-5xl"
                      : "text-gray-500 dark:text-gray-400 font-medium text-3xl md:text-5xl"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
