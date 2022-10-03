import React from "react";
import client from "../../client";
import groq from "groq";
import Subscribe from "../../components/Subscribe";
import Card from "../../components/Card";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { NextSeo } from "next-seo";
import CardNew from "../../components/CardNew";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Blog = ({ posts }) => {
  return (
    <div className="m-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map((post) => (
          <CardNew
            title={post.title}
            key={post.name}
            url={urlFor(post.imageUrl).width(200)}
            slugUrl={post.slug.current}
            content={post.description}
          />

          //   <Card
          //     title={post.title}
          //     key={post.title}
          //     url={
          //       urlFor(post.mainImage).width(200)
          //       //   "https://avatars.githubusercontent.com/u/76010008?v=4"
          //     }
          //     alt={`author ${post.name}`}
          //   />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  const posts = await client.fetch(groq`
  *[_type == 'post']{
    "name": author->name,
    title,
    "imageUrl": author->image,
    mainImage,
    description,
    slug
  } | order(_createdAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}
