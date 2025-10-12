"use client";

import { Menu, XX } from lucide-react
import Image"next/inext/image
import Linkext/link";/link
import { usePathname }Pathname } fnavigationnext/navigation";
import { useTheme }eTheme } fr-themesext-themes";
import { useCallback, useEffect, useState, useEffereactfrom "react";
import { Switchwitch";@/components/ui/switch

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
      description: "PÁGINA INICIAL DO PORTAL",
    },
    {
      name: "HISTÓRIAS",
      href: "/historias",
      description: "NARRATIVAS DE TRANSFORMAÇÃO URBANA",
    },
    {
      name: "MAPAS",
      href: "https://observatorio-nacional.vercel.app/projetos/geoportal",
      description: "VISUALIZAÇÕES GEOGRÁFICAS DE DADOS",
    },
    {
      name: "CATÁLOGO DE DADOS",
      href: "/catalogo-de-dados",
      description: "REPOSITÓRIO DE INFORMAÇÕES PÚBLICAS",
    },
    {
      name: "PROJETOS",
      href: "https://observatorio-nacional.vercel.app/",
      description: "OBSERVATÓRIO NACIONAL DE MOBILIDADE SUSTENTÁVEL",
    },
    {
      name: "SOBRE",
      href: "/sobre",
      description: "CONHECE O PORTAL CIDADOS",
    },
  ];

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 py-6 transition-colors">
        <div className="flex items-center justify-between px-4 max-w-7xl mx-auto">
          {/* Lado esquerdo - Logos */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <Image
              src="/portal_cidados_icon.png"
              alt="Logo Insper"
              width={120}
              height={40}
              className="h-7 md:h-10 w-auto"
            />
            <Image
              src="/insper_logo.png"
              alt="Logo Portal Cidados"
              width={120}
              height={40}
              className="h-7 md:h-12 w-auto"
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
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
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
                    ? "text-black dark:text-white font-bold text-3xl md:text-5xl"
                    : "text-gray-500 dark:text-gray-400 font-medium text-3xl md:text-5xl"
                }`}
              >
                {item.name}
              </div>
              <div
                className={`font-gt-ultra text-right text-2xl md:text-3xl font-medium text-black dark:text-white transition-all duration-300 ease-in-out overflow-hidden group-hover:text-foreground ${
                  pathname === item.href
                    ? "max-h-8 opacity-100 mt-1"
                    : "group-hover:max-h-8 group-hover:opacity-100 max-h-0 opacity-0"
                }`}
              >
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
