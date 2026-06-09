import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Plus, Search, List, Calculator } from "lucide-react";

export function Exercise6() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [newNumber, setNewNumber] = useState("");
  const [retrieveIndex, setRetrieveIndex] = useState("");
  const [retrievedValue, setRetrievedValue] = useState<number | null>(null);
  const [sum, setSum] = useState<number | null>(null);

  const handleAddNumber = () => {
    const num = parseFloat(newNumber);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setNewNumber("");
    }
  };

  const handleRetrieveByIndex = () => {
    const index = parseInt(retrieveIndex);
    if (!isNaN(index) && index >= 0 && index < numbers.length) {
      setRetrievedValue(numbers[index]);
    } else {
      setRetrievedValue(null);
    }
  };

  const handleCalculateSum = () => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
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

      <div className="flex-1 flex items-center justify-center py-8">
        <div className="max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                Number Array Manager
              </h1>
              <p className="text-cyan-200/70">
                Exercise 6: Manage and manipulate number arrays
              </p>
            </div>

            <div className="space-y-8">
              {/* Add Number */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Number to Array
                </h3>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    placeholder="Enter a number"
                    className="flex-1 bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <button
                    onClick={handleAddNumber}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Add Number
                  </button>
                </div>
              </div>

              {/* Retrieve by Index */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Retrieve Number by Index
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <input
                      type="number"
                      value={retrieveIndex}
                      onChange={(e) => setRetrieveIndex(e.target.value)}
                      placeholder="Enter index (0, 1, 2, ...)"
                      className="flex-1 bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    />
                    <button
                      onClick={handleRetrieveByIndex}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Retrieve
                    </button>
                  </div>
                  {retrievedValue !== null && (
                    <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
                      <div className="text-purple-200 text-sm mb-1">Value at Index {retrieveIndex}</div>
                      <div className="text-3xl font-bold text-purple-400">
                        {retrievedValue}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Show Whole Array */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <List className="w-5 h-5" />
                  Array Contents
                </h3>
                <div className="bg-white/5 border border-white/20 rounded-xl p-4 min-h-[100px]">
                  {numbers.length > 0 ? (
                    <div className="space-y-2">
                      {numbers.map((num, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-cyan-500/10 border border-cyan-400/20 rounded-lg px-4 py-2"
                        >
                          <span className="text-cyan-400 font-mono text-sm">
                            Index {index}
                          </span>
                          <span className="text-white font-semibold text-lg">
                            {num}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-cyan-200/40 py-8">
                      No numbers in array yet. Add some numbers above!
                    </div>
                  )}
                </div>
                <div className="mt-3 text-cyan-200/60 text-sm">
                  Total elements: {numbers.length}
                </div>
              </div>

              {/* Calculate Sum */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Sum of All Numbers
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={handleCalculateSum}
                    disabled={numbers.length === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Calculate Sum
                  </button>
                  {sum !== null && (
                    <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-6">
                      <div className="text-green-200 text-sm mb-1">Total Sum</div>
                      <div className="text-4xl font-bold text-green-400">
                        {sum}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
