import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Plus, Database } from "lucide-react";
import { getAddition1, getAddition2 } from "../../contracts/sum";

export function Exercise1() {
  const [value1, setValue1] = useState<number | undefined>();
  const [value2, setValue2] = useState<number | undefined>();
  const [result, setResult] = useState<number | null>(null);
  const [storageResult, setStorageResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSum = async () => {
    try {
      setLoading(true);

      const sum = await getAddition2(value1, value2);

      setResult(sum);
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSumStorage = async () => {
    try {
      setLoading(true);

      const sum = await getAddition1();

      setStorageResult(sum);
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex flex-col p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 w-fit"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Main</span>
      </Link>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                Sum Calculator
              </h1>
              <p className="text-cyan-200/70">
                Exercise 1: Basic arithmetic operations
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-cyan-200 mb-2 font-medium">
                  Variable 1
                </label>
                <input
                  type="number"
                  value={value1}
                  onChange={(e) => setValue1(Number(e.target.value))}
                  placeholder="Enter first number"
                  className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-cyan-200 mb-2 font-medium">
                  Variable 2
                </label>
                <input
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(Number(e.target.value))}
                  placeholder="Enter second number"
                  className="w-full bg-white/5 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <button
                onClick={handleSum}
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Sum
              </button>

              <button
                onClick={handleSumStorage}
                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Database className="w-5 h-5" />
                Sum Storage Variables
              </button>
            </div>

            {
              loading && (
                <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
                  <div className="text-yellow-200 text-sm mb-1">
                    Calculating...
                  </div>
                </div>
              )
            }

            {/* Results */}
            {(result !== null || storageResult !== null) && (
              <div className="space-y-4">
                {result !== null && (
                  <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-6">
                    <div className="text-cyan-200 text-sm mb-1">Result: </div>
                    <div className="text-4xl font-bold text-cyan-400">
                      {result}
                    </div>
                  </div>
                )}

                {storageResult !== null && (
                  <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-6">
                    <div className="text-purple-200 text-sm mb-1">
                      Storage Sum:
                    </div>
                    <div className="text-4xl font-bold text-purple-400">
                      {storageResult}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
