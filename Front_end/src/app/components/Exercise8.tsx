import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Send, Wallet } from "lucide-react";

export function Exercise8() {
  const [sendAmount, setSendAmount] = useState("");
  const [contractBalance, setContractBalance] = useState(0);
  const [userBalance, setUserBalance] = useState(10); // Simulated user balance
  const [lastTransaction, setLastTransaction] = useState<{ type: string; amount: number } | null>(null);

  const handleSendETH = () => {
    const amount = parseFloat(sendAmount);
    if (!isNaN(amount) && amount > 0 && amount <= userBalance) {
      setContractBalance(contractBalance + amount);
      setUserBalance(userBalance - amount);
      setLastTransaction({ type: "send", amount });
      setSendAmount("");
    }
  };

  const handleWithdrawAll = () => {
    if (contractBalance > 0) {
      setUserBalance(userBalance + contractBalance);
      setLastTransaction({ type: "withdraw", amount: contractBalance });
      setContractBalance(0);
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
                ETH Transaction Manager
              </h1>
              <p className="text-cyan-200/70">
                Exercise 8: Send and withdraw ETH from contract
              </p>
            </div>

            {/* Balance Display */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-2xl p-6">
                <div className="text-cyan-200 text-sm mb-1">Your Balance</div>
                <div className="text-3xl font-bold text-cyan-400 flex items-center gap-2">
                  {userBalance.toFixed(2)} <span className="text-lg">ETH</span>
                </div>
              </div>
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-2xl p-6">
                <div className="text-purple-200 text-sm mb-1">Contract Balance</div>
                <div className="text-3xl font-bold text-purple-400 flex items-center gap-2">
                  {contractBalance.toFixed(2)} <span className="text-lg">ETH</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Send ETH */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send ETH to Contract
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-cyan-200 mb-2 font-medium">
                      Amount (ETH)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      placeholder="Enter amount to send"
                      className="w-full bg-white/5 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <button
                    onClick={handleSendETH}
                    disabled={!sendAmount || parseFloat(sendAmount) <= 0 || parseFloat(sendAmount) > userBalance}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Send ETH
                  </button>
                </div>
              </div>

              {/* Withdraw All ETH */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  Withdraw from Contract
                </h3>
                <button
                  onClick={handleWithdrawAll}
                  disabled={contractBalance === 0}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Withdraw All ETH
                </button>
                <div className="mt-3 text-cyan-200/60 text-sm text-center">
                  Withdraw all {contractBalance.toFixed(2)} ETH from the contract
                </div>
              </div>

              {/* Last Transaction */}
              {lastTransaction && (
                <div className={`${
                  lastTransaction.type === "send"
                    ? "bg-green-500/20 border-green-400/30"
                    : "bg-orange-500/20 border-orange-400/30"
                } border rounded-2xl p-6`}>
                  <div className="text-center">
                    <div className={`text-sm mb-1 ${
                      lastTransaction.type === "send" ? "text-green-200" : "text-orange-200"
                    }`}>
                      Last Transaction
                    </div>
                    <div className={`text-2xl font-bold ${
                      lastTransaction.type === "send" ? "text-green-400" : "text-orange-400"
                    }`}>
                      {lastTransaction.type === "send" ? "Sent" : "Withdrew"} {lastTransaction.amount.toFixed(2)} ETH
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
