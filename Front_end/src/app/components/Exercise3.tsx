import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Save, FileText, Merge, Ruler, Equal } from "lucide-react";

export function Exercise3() {
  const [storageMessage, setStorageMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [concatInput, setConcatInput] = useState("");
  const [concatWith, setConcatWith] = useState("");
  const [lengthInput, setLengthInput] = useState("");
  const [compareString1, setCompareString1] = useState("");
  const [compareString2, setCompareString2] = useState("");

  const [getMessage, setGetMessage] = useState<string | null>(null);
  const [concatResult, setConcatResult] = useState<string | null>(null);
  const [lengthResult, setLengthResult] = useState<number | null>(null);
  const [compareResult, setCompareResult] = useState<string | null>(null);

  const handleSetMessage = () => {
    setStorageMessage(newMessage);
    setGetMessage(null);
  };

  const handleGetMessage = () => {
    setGetMessage(storageMessage || "No message set");
  };

  const handleConcatenate = () => {
    const result = concatInput + concatWith;
    setConcatResult(result);
  };

  const handleConcatenateWithStorage = () => {
    const result = storageMessage + concatInput;
    setConcatResult(result);
  };

  const handleGetLength = () => {
    setLengthResult(lengthInput.length);
  };

  const handleCompare = () => {
    if (compareString1 === compareString2) {
      setCompareResult("Strings are equal ✓");
    } else {
      setCompareResult("Strings are not equal ✗");
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

      <div className="flex-1 flex items-center justify-center py-8">
        <div className="max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                String Operations
              </h1>
              <p className="text-cyan-200/70">
                Exercise 3: Work with strings and messages
              </p>
            </div>

            <div className="space-y-8">
              {/* Set and Get Message */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  Set & Get Message
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Enter message to store"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                    <button
                      onClick={handleSetMessage}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Set Message
                    </button>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={handleGetMessage}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      Get Message
                    </button>
                    {getMessage !== null && (
                      <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
                        <div className="text-purple-200 text-sm mb-1">Stored Message</div>
                        <div className="text-white font-medium break-all">
                          {getMessage}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Concatenate Strings */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Merge className="w-5 h-5" />
                  Concatenate Strings
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={concatInput}
                      onChange={(e) => setConcatInput(e.target.value)}
                      placeholder="First string"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                    <input
                      type="text"
                      value={concatWith}
                      onChange={(e) => setConcatWith(e.target.value)}
                      placeholder="Second string"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={handleConcatenate}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Concatenate
                    </button>
                    <button
                      onClick={handleConcatenateWithStorage}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Concatenate With Storage
                    </button>
                  </div>
                  {concatResult !== null && (
                    <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-4">
                      <div className="text-cyan-200 text-sm mb-1">Concatenated Result</div>
                      <div className="text-white font-medium break-all">
                        {concatResult}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* String Length */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Ruler className="w-5 h-5" />
                  String Length
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={lengthInput}
                    onChange={(e) => setLengthInput(e.target.value)}
                    placeholder="Enter string to measure"
                    className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                  <button
                    onClick={handleGetLength}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Get Length
                  </button>
                  {lengthResult !== null && (
                    <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
                      <div className="text-green-200 text-sm mb-1">String Length</div>
                      <div className="text-3xl font-bold text-green-400">
                        {lengthResult}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Compare Strings */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Equal className="w-5 h-5" />
                  Compare Strings
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={compareString1}
                      onChange={(e) => setCompareString1(e.target.value)}
                      placeholder="First string"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                    <input
                      type="text"
                      value={compareString2}
                      onChange={(e) => setCompareString2(e.target.value)}
                      placeholder="Second string"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <button
                    onClick={handleCompare}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Compare
                  </button>
                  {compareResult !== null && (
                    <div className={`${
                      compareResult.includes("equal ✓")
                        ? "bg-green-500/20 border-green-400/30"
                        : "bg-orange-500/20 border-orange-400/30"
                    } border rounded-xl p-4`}>
                      <div className={`text-lg font-semibold ${
                        compareResult.includes("equal ✓") ? "text-green-400" : "text-orange-400"
                      }`}>
                        {compareResult}
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
