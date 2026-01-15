import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Write Perfectly
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Outparse combines advanced AI with intuitive tools to transform your writing process.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Grammar Checker',
                description: 'Fix grammatical errors, punctuation mistakes, and syntax issues instantly.',
                icon: '✓',
                color: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
                borderColor: 'border-yellow-200'
              },
              {
                title: 'Spell Check',
                description: 'Detect and correct spelling errors in over 50 languages with high accuracy.',
                icon: '🔤',
                color: 'bg-gradient-to-br from-green-100 to-green-50',
                borderColor: 'border-green-200'
              },
              {
                title: 'Paraphrasing',
                description: 'Rewrite sentences while preserving meaning and improving clarity.',
                icon: '🔄',
                color: 'bg-gradient-to-br from-yellow-100 to-green-50',
                borderColor: 'border-yellow-200'
              },
              {
                title: 'Tone Analysis',
                description: 'Analyze and adjust the tone of your writing for any audience.',
                icon: '🎯',
                color: 'bg-gradient-to-br from-green-100 to-yellow-50',
                borderColor: 'border-green-200'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`rounded-xl border ${feature.borderColor} p-6 ${feature.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Paste Your Text',
                description: 'Copy and paste your writing into our editor. No limits on length or complexity.'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our AI scans your text for errors, style issues, and improvement opportunities.'
              },
              {
                step: '03',
                title: 'Apply Suggestions',
                description: 'Review and apply suggestions with a single click to perfect your writing.'
              }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(at 53% 78%, rgba(255, 255, 0, 0.3) 0px, transparent 50%), 
                        radial-gradient(at 71% 91%, rgba(51, 255, 0, 0.3) 0px, transparent 50%), 
                        radial-gradient(at 31% 91%, rgba(255, 128, 0, 0.17) 0px, transparent 50%)`,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Writing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join millions of writers, students, and professionals who trust Outparse for perfect writing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-lg bg-gradient-to-r from-yellow-400 to-green-500 px-8 py-4 text-lg font-semibold text-gray-900 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Schedule a Demo
              </button>
            </div>
            
            <div className="mt-8 text-gray-500">
              <p>No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Trusted by Writers Worldwide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Outparse cut my editing time in half. The AI suggestions are incredibly accurate and helpful.",
                author: "Sarah Johnson",
                role: "Content Writer",
                avatar: "SJ"
              },
              {
                quote: "As a non-native English speaker, Outparse has been invaluable for improving my professional writing.",
                author: "Carlos Mendez",
                role: "Marketing Manager",
                avatar: "CM"
              },
              {
                quote: "The grammar checker catches subtle errors that even seasoned editors miss. A must-have tool.",
                author: "Emily Chen",
                role: "Technical Writer",
                avatar: "EC"
              }
            ].map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-yellow-400 mb-4">
                  {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-2xl">{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
