// import Image from "next/image";
// import Head from "next/head";
// import { MDXRemote } from "next-mdx-remote";
// import { serialize } from "next-mdx-remote/serialize";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeHighlight from "rehype-highlight";
// import { getPostFromSlug, getSlugs } from "@/src/api";
// import "highlight.js/styles/atom-one-dark.css";

// export default function PostPage({ post }) {
//   return (
//     <>
//       <Head>
//         <title>{post.meta.title}</title>
//       </Head>
//       <h1>{post.meta.title}</h1>
//       <MDXRemote {...post.source} components={{ Image }} />
//     </>
//   );
// }

// export const getStaticProps = async ({ params }) => {
//   const { slug } = params;
//   const { content, meta } = getPostFromSlug(slug);
//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       rehypePlugins: [
//         rehypeSlug,
//         [rehypeAutolinkHeadings, { behavior: "wrap" }],
//         rehypeHighlight,
//       ],
//     },
//   });

//   return { props: { post: { source: mdxSource, meta } } };
// };

// export const getStaticPaths = async () => {
//   const paths = getSlugs().map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
// Footer;
import React from "react";

export default function Posts() {
  return <div>Posts</div>;
}
