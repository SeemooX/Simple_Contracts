import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowDownUp } from "lucide-react";

export function Exercise2() {
  const [etherValue, setEtherValue] = useState("");
  const [weiValue, setWeiValue] = useState("");
  const [etherToWeiResult, setEtherToWeiResult] = useState<string | null>(null);
  const [weiToEtherResult, setWeiToEtherResult] = useState<string | null>(null);

  const handleEtherToWei = () => {
    const ether = parseFloat(etherValue) || 0;
    const wei = ether * 1e18;
    setEtherToWeiResult(wei.toLocaleString('fullwide', { useGrouping: false }));
  };

  const handleWeiToEther = () => {
    const wei = parseFloat(weiValue) || 0;
    const ether = wei / 1e18;
    setWeiToEtherResult(ether.toString());
  };

  return (
    <div className="min-h-screen flex flex-col p-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 w-fit"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Main</span>
      </Link>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                Crypto Price Conversion
              </h1>
              <p className="text-cyan-200/70">
                Exercise 2: Convert between Ether and Wei
              </p>
            </div>

            {/* Ether to Wei */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                Ether to Wei
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-cyan-200 mb-2 font-medium">
                    Amount in Ether
                  </label>
                  <input
                    type="number"
                    value={etherValue}
                    onChange={(e) => setEtherValue(e.target.value)}
                    placeholder="Enter Ether amount"
                    className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                <button
                  onClick={handleEtherToWei}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ArrowDownUp className="w-5 h-5" />
                  Convert to Wei
                </button>
                {etherToWeiResult !== null && (
                  <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-6">
                    <div className="text-cyan-200 text-sm mb-1">Result in Wei</div>
                    <div className="text-2xl font-bold text-cyan-400 break-all">
                      {etherToWeiResult}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-white/20 my-8" />

            {/* Wei to Ether */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                Wei to Ether
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-cyan-200 mb-2 font-medium">
                    Amount in Wei
                  </label>
                  <input
                    type="number"
                    value={weiValue}
                    onChange={(e) => setWeiValue(e.target.value)}
                    placeholder="Enter Wei amount"
                    className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                <button
                  onClick={handleWeiToEther}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ArrowDownUp className="w-5 h-5" />
                  Convert to Ether
                </button>
                {weiToEtherResult !== null && (
                  <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-6">
                    <div className="text-purple-200 text-sm mb-1">Result in Ether</div>
                    <div className="text-2xl font-bold text-purple-400 break-all">
                      {weiToEtherResult}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
