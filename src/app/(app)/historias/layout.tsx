import { ForceLightTheme } from "./force-light-theme";

export default function HistoriasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ForceLightTheme>{children}</ForceLightTheme>;
}
