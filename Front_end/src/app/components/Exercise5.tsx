import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function Exercise5() {
  const [numberInput, setNumberInput] = useState("");
  const [result, setResult] = useState<{ isEven: boolean; value: number } | null>(null);

  const handleCheck = () => {
    const num = parseFloat(numberInput);
    if (!isNaN(num) && Number.isInteger(num)) {
      setResult({
        isEven: num % 2 === 0,
        value: num
      });
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
                Even or Odd Checker
              </h1>
              <p className="text-cyan-200/70">
                Exercise 5: Determine if a number is even or odd
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
                  placeholder="Enter an integer"
                  className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <button
                onClick={handleCheck}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Check Even or Odd
              </button>

              {result !== null && (
                <div className={`${
                  result.isEven
                    ? "bg-blue-500/20 border-blue-400/30"
                    : "bg-purple-500/20 border-purple-400/30"
                } border rounded-2xl p-8 transition-all duration-300`}>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-3 ${
                      result.isEven ? "text-blue-400" : "text-purple-400"
                    }`}>
                      {result.value}
                    </div>
                    <div className={`text-2xl font-semibold ${
                      result.isEven ? "text-blue-300" : "text-purple-300"
                    }`}>
                      {result.isEven ? "Even Number" : "Odd Number"}
                    </div>
                    <div className={`text-sm mt-2 ${
                      result.isEven ? "text-blue-200/70" : "text-purple-200/70"
                    }`}>
                      {result.isEven
                        ? `${result.value} is divisible by 2`
                        : `${result.value} has a remainder when divided by 2`
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center text-cyan-200/60 text-sm">
              Enter an integer and check if it's even or odd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
