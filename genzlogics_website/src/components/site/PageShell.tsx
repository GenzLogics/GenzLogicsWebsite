import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main className="min-h-screen">{children}</main><SiteFooter /></>;
}
