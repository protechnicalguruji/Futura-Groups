import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
    {
        title: "The Rise of North Bengaluru: A Real Estate Hub",
        excerpt: "Why Nagawara and Hebbal are becoming the most sought-after locations for luxury and commercial investments.",
        date: "June 15, 2026",
        author: "Siddharth",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
        category: "Market Trends"
    },
    {
        title: "NRI Guide to Property Management in India",
        excerpt: "Essential tips for NRIs to manage their property portfolios from abroad without any legal hassles.",
        date: "May 28, 2026",
        author: "Futura Admin",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        category: "NRI Services"
    },
    {
        title: "Commercial vs Residential: Where to Invest?",
        excerpt: "Analyzing the ROI and long-term benefits of commercial spaces vs residential plots in the current market.",
        date: "May 10, 2026",
        author: "Investment Team",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        category: "Investment"
    }
];

export default function Blog() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-accent font-sans font-bold tracking-widest uppercase text-sm mb-4 text-center md:text-left">Insights & News</h2>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary text-center md:text-left">Latest from Futura</h2>
                    </div>
                    <button className="px-8 py-3 border border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">View All Articles</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-surface rounded-[32px] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full uppercase tracking-wider">{post.category}</div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-6 text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-2"><Calendar size={14} /> {post.date}</div>
                                    <div className="flex items-center gap-2"><User size={14} /> {post.author}</div>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                                <p className="text-gray-600 mb-8 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                                <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                                    Read More <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
