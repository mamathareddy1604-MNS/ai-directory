"use client";
import { useState } from 'react';

// Sample data for trending tools - you can eventually move this to a database
const INITIAL_TOOLS = [
  { id: 1, name: "Claude 3.5 Sonnet", category: "AI Writing", description: "Advanced language model for coding and deep writing tasks.", link: "#", premium: "Freemium" },
  { id: 2, name: "Midjourney v6", category: "AI Image", description: "Photorealistic text-to-image generator via Discord.", link: "#", premium: "Paid" },
  { id: 3, name: "v0 by Vercel", category: "AI Coding", description: "Generates production-ready React and Tailwind code from text prompts.", link: "#", premium: "Freemium" },
  { id: 4, name: "ElevenLabs", category: "AI Voice", description: "Hyper-realistic voice generation and cloning tool.", link: "#", premium: "Freemium" },
  { id: 5, name: "Cursor", category: "AI Coding", description: "An AI-first code editor built around language models.", link: "#", premium: "Freemium" },
  { id: 6, name: "Suno AI", category: "AI Music", description: "Generate full-length songs with vocals and instrumentation from a prompt.", link: "#", premium: "Free" }
];

const CATEGORIES = ["All", "AI Writing", "AI Image", "AI Coding", "AI Voice", "AI Music"];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic for search and category
  const filteredTools = INITIAL_TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FutureTools.io Clone
          </h1>
          <nav className="space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition">Trending</a>
            <a href="#" className="hover:text-white transition">Submit a Tool</a>
            <span className="bg-blue-600 text-white px-3 py-1.5 rounded-md font-medium text-xs">AD: Hostinger 50% Off</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-16 pb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Discover the Best <span className="text-cyan-400">Trending AI Tools</span>
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Join 50,000+ monthly users sourcing the top-rated AI platforms. Updated daily.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search over 1,000+ AI tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-5 py-3.5 pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
          />
          <span className="absolute left-4 top-4 text-slate-500">🔍</span>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Categories */}
        <aside className="lg:col-span-1">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
          <div className="space-y-1">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                  selectedCategory === category 
                    ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400 pl-2' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sidebar Banner Ad Placeholder */}
          <div className="mt-8 p-4 bg-gradient-to-br from-slate-800 to-slate-850 rounded-xl border border-slate-700/50 text-center">
            <span className="text-[10px] text-slate-500 block mb-2 uppercase tracking-widest">Sponsored</span>
            <p className="text-sm font-medium text-slate-300 mb-3">Build sites like this instantly with AI.</p>
            <button className="bg-slate-700 text-xs font-semibold px-4 py-2 rounded hover:bg-slate-600 w-full transition">
              Learn More
            </button>
          </div>
        </aside>

        {/* Tool Directory Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-slate-400">
              Showing <span className="text-slate-200 font-medium">{filteredTools.length}</span> tools
            </p>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
              <p className="text-slate-500">No tools found matching your query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTools.map(tool => (
                <div 
                  key={tool.id} 
                  className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 hover:border-slate-600 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {tool.category}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        tool.premium === 'Free' ? 'bg-emerald-500/10 text-emerald-400' :
                        tool.premium === 'Freemium' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {tool.premium}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1.5">{tool.name}</h4>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-4">{tool.description}</p>
                  </div>
                  <a 
                    href={tool.link} 
                    className="mt-2 block text-center bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white text-slate-300 text-xs font-semibold py-2 rounded-lg transition"
                  >
                    Visit Website ↗
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}


