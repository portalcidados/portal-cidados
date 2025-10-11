import { Switch } from "@/components/ui/switch";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-gray-200 py-6">
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
            className="h-8 md:h-12 w-auto"
          />
        </div>

        {/* Lado direito - Switch e Menu */}
        <div className="flex items-center space-x-4">
          <Switch />
          <button
            type="button"
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
