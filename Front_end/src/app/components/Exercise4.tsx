import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { estPositif } from "../../contracts/estPositif";

export function Exercise4() {
  const [numberInput, setNumberInput] = useState<string>("");
  const [result, setResult] = useState<{ isPositive: boolean; value: number | string | undefined } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckSign = async () => {
    try {
      setLoading(true);

      const isPositive = await estPositif(numberInput);
      console.log(isPositive);   

      setResult({
        isPositive,
        value: numberInput
      });
    } catch (error) {
      console.error("Error checking sign:", error);
    } finally {
      setLoading(false);
    }
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
                Number Sign Checker
              </h1>
              <p className="text-cyan-200/70">
                Exercise 4: Check if a number is positive or negative
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-cyan-200 mb-2 font-medium">
                  Enter a Number
                </label>
                <input
                  type="number"
                  value={numberInput}
                  onChange={(e) => setNumberInput(e.target.value)}
                  placeholder="Enter any number"
                  className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <button
                onClick={handleCheckSign}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Check Sign
              </button>

              {
                loading && (
                  <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
                    <div className="text-yellow-200 text-sm mb-1">
                      Converting...
                    </div>
                  </div>
                )
              }

              {(result !== null && loading === false) && (
                <div className={`${result.isPositive
                  ? "bg-green-500/20 border-green-400/30"
                  : "bg-red-500/20 border-red-400/30"
                  } border rounded-2xl p-8 transition-all duration-300`}>
                  <div className="flex items-center justify-center mb-4">
                    {result.isPositive ? (
                      <CheckCircle2 className="w-16 h-16 text-green-400" />
                    ) : (
                      <XCircle className="w-16 h-16 text-red-400" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${result.isPositive ? "text-green-400" : "text-red-400"
                      }`}>
                      {result.value}
                    </div>
                    <div className={`text-xl font-semibold ${result.isPositive ? "text-green-300" : "text-red-300"
                      }`}>
                      {result.isPositive ? (
                        result.value === 0 ? "Zero (Neutral)" : "Positive Number ✓"
                      ) : (
                        "Negative Number ✗"
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center text-cyan-200/60 text-sm">
              Enter a number and click "Check Sign" to determine if it's positive or negative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
