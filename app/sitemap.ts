import { MetadataRoute } from 'next';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://megabytecircuits.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let blogEntries: MetadataRoute.Sitemap = [];

    try {
        const res = await fetch(`${API_BASE}/api/blogs?limit=1000`, { next: { revalidate: 3600 } });
        if (res.ok) {
            const data = await res.json();
            if (data.status && data.blogs?.data) {
                blogEntries = data.blogs.data.map((post: any) => ({
                    url: `${SITE_URL}/blogs/${post.slug}`,
                    lastModified: post.published_at ? new Date(post.published_at) : new Date(),
                    changeFrequency: 'weekly' as const,
                    priority: 0.8,
                }));
            }
        }
    } catch (e) {
        console.error("Sitemap blog fetch error:", e);
    }

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    return [...staticRoutes, ...blogEntries];
}
