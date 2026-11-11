import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { getBlogBySlug } from "@/data/blogs";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the blogs listing page for /blogs", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/blogs");

    expect(matches.at(-1)?.routeId).toBe("/blogs");
  });

  it("matches the blog detail route directly under root for /blogs/:slug", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/blogs/nadra-marriage-certificate-karachi-guide");

    expect(matches.at(-1)?.routeId).toBe("/blogs_/$slug");
  });

  it("resolves the Karachi registered Nikah Khawan guide route and data", () => {
    const slug = "how-to-verify-book-registered-nikah-khawan-karachi";
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(`/blogs/${slug}`);
    const post = getBlogBySlug(slug);

    expect(matches.at(-1)?.routeId).toBe("/blogs_/$slug");
    expect(post?.image).toBe("/images/blogs/registered-nikah-khawan-karachi.jpg");
  });
});
