import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*/*.mdx`,
  contentType: "mdx",
  bodyType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishDate: {
      type: "date",
      required: true,
    },
    updateDate: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: 'json',
      resolve: async (doc) => {
        
        const slugger = new GithubSlugger();
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
          const flag = groups?.flag;
          const content = groups?.content;

          return {
            level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined
          }
        })
        return headings;
      }
    }
  },
}));

const codeOptions = {
  theme: "github-dark",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
