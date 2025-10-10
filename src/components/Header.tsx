"use client";

import { Switch } from "@/components/ui/switch";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Lado esquerdo - Logos */}
        <div className="flex items-center space-x-8">
          {/* Primeiro logo - Portal Cidadãos */}
          <div className="flex items-center space-x-3">
            <Image
              src="/portal_cidados_icon.png"
              alt="Portal Cidadãos"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium text-sm">Portal</span>
              <span className="text-gray-800 font-medium text-sm">
                Cidadãos
              </span>
            </div>
          </div>

          {/* Segundo logo - Insper/Arq.Futuro */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/portal_cidados_icon.png"
                alt="Insper Arq.Futuro"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>

        {/* Lado direito - Switch e Menu */}
        <div className="flex items-center space-x-4">
          {/* Switch de tema */}
          <Switch />

          {/* Menu hambúrguer */}
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </header>
  );
}
