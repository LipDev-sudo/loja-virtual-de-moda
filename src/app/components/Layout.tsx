import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#FBF7F6]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
