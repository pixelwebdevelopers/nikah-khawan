import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import { BLOGS_DATA, type BlogPost } from "@/data/blogs";
import {
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/blogs")({
  head: () =>
    buildPageSeo({
      title: "Nikah & Marriage Legal Blogs, Guides & Shariah Fatwas Karachi",
      description:
        "Authoritative legal guides and Shariah articles on Nikah registration, NADRA computerized marriage certificate (MRC), court marriage laws, online Nikah validity & checklists.",
      path: "/blogs",
      schemaType: "CollectionPage",
      category: "Legal & Shariah Guides",
    }),
  component: BlogsHubComponent,
});

const categories = [
  "All Articles",
  "Legal Documentation",
  "Court Marriage",
  "Islamic Jurisprudence",
  "Checklists & Guides",
  "Sunnah & Traditions",
];

function BlogsHubComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOGS_DATA.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.urduTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SiteLayout>
      <div className="relative overflow-hidden py-10 md:py-16">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-gold/20 via-champagne/15 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition font-medium">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold">Blogs & Legal Guides</span>
          </nav>

          {/* Page Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary shadow-xs">
              <BookOpen className="h-3.5 w-3.5 text-gold" />
              <span>Authoritative Legal & Shariah Knowledge Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-tight">
              Nikah Guides, Legal Articles & Shariah Rulings
            </h1>

            <p className="font-urdu text-xl text-gold/90 font-medium" dir="rtl">
              نکاح رجسٹریشن، نادرا میرج سرٹیفکیٹ اور شرعی قوانین پر مستند مضامین
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
              Comprehensive educational resources authored by licensed Nikah Registrars and High
              Court Family Advocates. Understand your legal rights, statutory documentation, and
              authentic Islamic marital jurisprudence.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-12 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search legal guides, NADRA rules, court marriage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gold/40 bg-background pl-10 pr-4 py-2.5 text-xs sm:text-sm text-foreground shadow-xs placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "border border-gold/30 bg-background text-foreground/80 hover:bg-gold/15 hover:border-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of All 5 Articles with Relevant Images */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gold">
                  Articles Archive
                </div>
                <h2 className="text-2xl font-bold text-primary mt-1">
                  {selectedCategory === "All Articles"
                    ? "All Educational Articles & Procedures"
                    : `${selectedCategory} Guides`}
                </h2>
              </div>
              <span className="text-xs text-muted-foreground font-semibold">
                Showing {filteredPosts.length} Guides
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 border rounded-3xl border-gold/25 bg-pearl/30">
                <BookOpen className="h-10 w-10 text-gold mx-auto mb-3 opacity-60" />
                <h3 className="text-lg font-bold text-primary">No articles found</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Try adjusting your search query or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Articles");
                    setSearchQuery("");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-soft transition hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                  >
                    <div>
                      {/* Blog Post Relevant Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{post.category}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70" />
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-primary leading-snug group-hover:text-gold transition">
                          <Link to="/blogs/$slug" params={{ slug: post.slug }}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="font-urdu text-sm text-gold/90 font-medium" dir="rtl">
                          {post.urduTitle}
                        </p>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer with Author & Link */}
                    <div className="p-5 sm:p-6 pt-0 border-t border-gold/15 mt-4 flex items-center justify-between">
                      <div className="text-[11px] text-muted-foreground">
                        <span className="font-semibold text-primary">{post.author.name}</span>
                      </div>

                      <Link
                        to="/blogs/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-gold transition"
                      >
                        <span>Read Article</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          {/* Need Legal Consultation Banner */}
          <div className="mt-16 rounded-3xl border border-gold/30 bg-pearl/40 p-6 sm:p-10 text-center space-y-4 shadow-soft">
            <ShieldCheck className="h-10 w-10 text-gold mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Have Specific Questions About Your Marriage Paperwork?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every marriage scenario is unique—whether dealing with overseas documents, Union
              Council registrations, or second marriages. Our licensed registrars provide free,
              confidential guidance.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-primary px-8 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-soft hover:bg-primary/90 transition"
              >
                <span>Ask on WhatsApp</span>
              </a>
              <Link
                to="/q-and-a"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-background px-8 py-3 text-xs sm:text-sm font-bold text-primary hover:bg-gold/15 transition"
              >
                <span>Browse All Q&A (15+ FAQs)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
