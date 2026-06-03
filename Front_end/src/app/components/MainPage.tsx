import { Link } from "react-router";
import { Rocket } from "lucide-react";

const exercises = [
  { id: 1, title: "Sum Calculator", path: "/exercise-1" },
  { id: 2, title: "Exercise 2", path: "/exercise-2" },
  { id: 3, title: "Exercise 3", path: "/exercise-3" },
  { id: 4, title: "Exercise 4", path: "/exercise-4" },
  { id: 5, title: "Exercise 5", path: "/exercise-5" },
  { id: 6, title: "Exercise 6", path: "/exercise-6" },
  { id: 7, title: "Exercise 7", path: "/exercise-7" },
  { id: 8, title: "Exercise 8", path: "/exercise-8" },
];

export function MainPage() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            Web3 Exercises
          </h1>
          <p className="text-xl text-cyan-200/80">
            Master blockchain development with interactive exercises
          </p>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exercises.map((exercise) => (
            <Link
              key={exercise.id}
              to={exercise.path}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-4xl font-bold text-cyan-400 mb-3">
                  {exercise.id.toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exercise.title}
                </h3>
                <div className="text-cyan-200/60 text-sm">
                  Click to start →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
