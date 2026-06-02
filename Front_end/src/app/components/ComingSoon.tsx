import { Link } from "react-router";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  pageNumber: number;
}

export function ComingSoon({ pageNumber }: ComingSoonProps) {
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
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-16 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full p-8">
                <Clock className="w-20 h-20 text-cyan-400" />
              </div>
            </div>

            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
              Coming Soon
            </h1>

            <p className="text-2xl text-cyan-200/70 mb-8">
              Exercise {pageNumber}
            </p>

            <div className="text-cyan-200/60">
              This exercise is under development and will be available soon.
              <br />
              Stay tuned for more Web3 learning adventures!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
