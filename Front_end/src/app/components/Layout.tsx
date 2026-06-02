import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
