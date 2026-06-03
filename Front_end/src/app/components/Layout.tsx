import { Outlet } from "react-router";
import { launchToConnect } from "../../lib/wallet";
import { useEffect, useState } from "react";

export function Layout() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (!window.ethereum) return;

    launchToConnect();

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        setAddress(null);
      } else {
        setAddress(accounts[0]);
      }
    };

    const handleChainChanged = () => {
      window.location.reload(); // simplest safe approach
    };

    const checkConnection = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setAddress(accounts[0]);
      }
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    checkConnection();

    // This will runs only when the component unmount, changed the page
    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-700 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/20 via-gray-600/20 to-gray-400/20 animate-pulse" />
      {address &&
        <span className="px-6 py-3 rounded-xl bg-zinc-900 text-white font-medium border border-zinc-700 hover:bg-zinc-800 transition">
          Connected: {address.slice(0, 6) + "..." + address.slice(-4)}
        </span>
        }
      {/* Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
