import EditorCard from './EditorCard'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), 
                      radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), 
                      radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Grammar checking
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-500">
                made intelligent.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Use Outparse to improve your writing, catch mistakes, and use best practices to write like a pro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-8 py-3 text-lg font-medium text-gray-900 hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1M+</div>
                <div className="text-gray-600">Users</div>
              </div>
            </div>
          </div>

          {/* Editor Card */}
          <div className="relative">
            <EditorCard />
          </div>
        </div>
      </div>
    </section>
  )
}
