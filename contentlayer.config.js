import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*/*.mdx`,
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
      type: "string",
      required: true,
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
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
});
