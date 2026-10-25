import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import { BLOGS_DATA, getBlogBySlug, type BlogPost } from "@/data/blogs";
import { SITE_CONFIG } from "@/config/site";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Share2,
  MessageCircle,
  Phone,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  User,
  Quote,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Blog Not Found | Nikah Registrar Karachi" }],
      };
    }
    return buildPageSeo({
      title: post.title,
      description: post.metaDescription,
      path: `/blogs/${post.slug}`,
      schemaType: "Blog",
      category: post.category,
      faqs: post.faqs,
    });
  },
  component: BlogPostComponent,
});

function BlogPostComponent() {
  const { post } = Route.useLoaderData();

  const shareText = encodeURIComponent(`${post.title} - Read more on ${SITE_CONFIG.name}:`);
  const currentUrl = encodeURIComponent(`${SITE_CONFIG.url}/blogs/${post.slug}`);
  const whatsappShareUrl = `https://wa.me/?text=${shareText}%20${currentUrl}`;

  const consultWhatsAppUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Assalam-o-Alaikum, I have a question regarding your blog article: "${post.title}".`,
  )}`;

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter((b): b is BlogPost => Boolean(b));

  return (
    <SiteLayout>
      <article className="relative overflow-hidden py-10 md:py-16">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-gold/20 via-champagne/15 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition font-medium">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <Link to="/blogs" className="hover:text-primary transition font-medium">
              Blogs & Legal Guides
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-primary font-medium">{post.category}</span>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-pearl px-3 py-1 text-primary">
                <Sparkles className="h-3 w-3 text-gold" />
                <span>{post.category}</span>
              </span>
              <span className="text-gold">✦</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </span>
              <span className="text-gold">✦</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary leading-tight">
              {post.title}
            </h1>

            <p className="font-urdu text-lg sm:text-xl text-gold/90 font-medium" dir="rtl">
              {post.urduTitle}
            </p>

            {/* Author Byline */}
            <div className="pt-2 pb-4 border-b border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full border-2 border-gold/40 overflow-hidden bg-primary/10 grid place-items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary flex items-center gap-1.5">
                    <span>{post.author.name}</span>
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>

              {/* Share CTA */}
              <div className="flex items-center gap-2">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 transition"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <figure className="mt-8 overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-soft">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
              <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/70 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-champagne shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{post.badge}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            </div>
            <figcaption className="p-4 text-xs sm:text-sm font-medium text-foreground/90 bg-card/95 border-t border-gold/20 flex items-start gap-2.5">
              <span className="text-gold font-bold shrink-0 mt-0.5">✦</span>
              <span>{post.imageCaption}</span>
            </figcaption>
          </figure>

          {/* Key Takeaways Box */}
          <div className="mt-10 rounded-2xl border-2 border-gold/40 bg-pearl/40 p-5 sm:p-6 shadow-soft">
            <div className="flex items-center gap-2 text-primary font-bold text-base mb-3">
              <Sparkles className="h-5 w-5 text-gold shrink-0" />
              <span>Key Takeaways & Quick Summary</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Excerpt Lead */}
          <p className="mt-8 text-base sm:text-lg text-foreground/90 font-medium leading-relaxed italic border-l-4 border-gold pl-4 py-1">
            "{post.excerpt}"
          </p>

          {/* Article Sections */}
          <div className="mt-10 space-y-10">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight border-b border-gold/20 pb-2">
                  {section.heading}
                </h2>

                {section.subheading && (
                  <h3 className="text-base font-semibold text-gold">{section.subheading}</h3>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="rounded-xl border border-gold/20 bg-background/80 p-5 shadow-xs">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/90">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/20 text-gold text-[10px] font-bold shrink-0 mt-0.5">
                            {bpIdx + 1}
                          </span>
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.callout && (
                  <div
                    className={`rounded-2xl p-5 border ${
                      section.callout.type === "important"
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-200"
                        : section.callout.type === "quote"
                          ? "border-gold/40 bg-gold/10 text-primary italic"
                          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {section.callout.type === "important" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      ) : section.callout.type === "quote" ? (
                        <Quote className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        {section.callout.title && (
                          <div className="font-bold text-sm mb-1">{section.callout.title}</div>
                        )}
                        <p className="text-xs sm:text-sm leading-relaxed">{section.callout.text}</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Interactive FAQs Accordion */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-14 rounded-3xl border border-gold/30 bg-pearl/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="h-5 w-5 text-gold shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  Frequently Asked Questions (FAQ)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Common questions regarding this legal topic answered by our licensed Nikah
                Registrar.
              </p>

              <Accordion type="single" collapsible className="space-y-3">
                {post.faqs.map((faq, fIdx) => (
                  <AccordionItem
                    key={fIdx}
                    value={`faq-${fIdx}`}
                    className="rounded-2xl border border-gold/25 bg-background px-4 py-1"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-primary hover:text-gold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Direct WhatsApp Consultation CTA Box */}
          <div className="mt-12 rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-6 sm:p-8 text-primary-foreground shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-champagne/20 px-3 py-1 text-xs font-semibold text-champagne">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  <span>Free Islamic & Legal Guidance</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Have Questions About This Legal Topic?
                </h3>
                <p className="text-xs sm:text-sm text-pearl/80 max-w-md">
                  Speak directly with our qualified Islamic Scholar & Licensed Nikah Registrar. We
                  provide confidential 24/7 consultation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={consultWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-champagne bg-champagne px-6 py-3 text-sm font-bold text-primary shadow-soft hover:bg-gold hover:border-gold transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Ask on WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-pearl/40 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Registrar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles Showcase */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gold/20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gold">
                    Further Reading
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mt-1">
                    Related Legal & Shariah Guides
                  </h2>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-primary hover:text-gold transition"
                >
                  <span>All Articles</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rel, rIdx) => (
                  <article
                    key={rIdx}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gold/25 bg-card shadow-soft transition hover:-translate-y-1 hover:border-gold hover:shadow-lg"
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={rel.image}
                          alt={rel.imageAlt}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-champagne border border-gold/30">
                          {rel.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{rel.date}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{rel.readTime}</span>
                        </div>
                        <h3 className="text-sm font-bold text-primary line-clamp-2 group-hover:text-gold transition">
                          {rel.title}
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <Link
                        to="/blogs/$slug"
                        params={{ slug: rel.slug }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-gold transition"
                      >
                        <span>Read Guide</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Back to all blogs */}
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-6 py-2.5 text-xs font-bold text-primary hover:bg-gold/15 transition shadow-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Blogs & Legal Guides</span>
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
