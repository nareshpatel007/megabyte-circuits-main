export interface BlogAuthor {
    name: string;
    role: string;
    avatar: string;
}

export type BlockType = 'paragraph' | 'heading' | 'list' | 'quote' | 'callout' | 'code';

export interface ContentBlock {
    type: BlockType;
    text?: string;
    items?: string[];
    level?: number;
    code?: string;
    language?: string;
    variant?: 'info' | 'warning' | 'tip';
}

export interface BlogPost {
    slug: string;
    tag: string;
    title: string;
    desc: string;
    date: string;
    readTime: string;
    author: BlogAuthor;
    color: string; // Tailwind gradient classes
    image: string; // Unsplash or local image URL
    content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [];
