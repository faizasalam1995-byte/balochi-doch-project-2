import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/products';

export const JournalPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="py-12 bg-[#110306] min-h-screen text-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#d4a326] uppercase">
            PAGE 7 • THE ATELIER JOURNAL
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Chronicles of Baloch Needlework
          </h1>
          <p className="text-sm text-[#b89f97] mt-3">
            Essays on textile history, styling guides for weddings, and the ancestral symbolism woven into traditional Balochi garments.
          </p>
        </div>

        {/* Featured First Post */}
        {BLOG_POSTS.length > 0 && (
          <div 
            onClick={() => setSelectedPost(BLOG_POSTS[0])}
            className="mb-14 bg-[#160408] border border-[#3b0e16] rounded-3xl overflow-hidden hover:border-[#d4a326]/60 transition cursor-pointer group shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 aspect-[16/10] overflow-hidden">
                <img
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#d4a326] font-semibold">
                  <span>{BLOG_POSTS[0].category}</span>
                  <span>•</span>
                  <span>{BLOG_POSTS[0].readTime}</span>
                </div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white group-hover:text-[#f7df94] transition">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-xs sm:text-sm text-[#cfb687] leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#d4a326] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#160408] border border-[#3b0e16] rounded-2xl overflow-hidden hover:border-[#d4a326]/60 transition cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#d4a326] font-semibold mb-1">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f7df94] transition">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#b89f97] mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#2d0a10] flex items-center justify-between text-xs font-bold text-[#d4a326]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            ></div>

            <div className="relative w-full max-w-3xl bg-[#170509] border border-[#d4a326]/50 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#911f2d] via-[#d4a326] to-[#911f2d]"></div>
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 text-[#b89f97] hover:text-white hover:bg-[#2b0a11] rounded-full transition z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#d4a326] uppercase">
                    {selectedPost.category} • {selectedPost.readTime}
                  </span>
                  <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedPost.title}
                  </h2>
                  <p className="text-xs text-[#b89f97] mt-1">{selectedPost.subtitle}</p>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#3b0e16]">
                  <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#cfb687] leading-relaxed">
                  {selectedPost.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#3b0e16] text-center">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 bg-[#d4a326] text-[#140407] font-bold text-xs uppercase tracking-wider rounded-lg"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
