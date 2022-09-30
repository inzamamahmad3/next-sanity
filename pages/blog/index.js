import React from "react";
import client from "../../client";
import Card from "../../components/Card";
import imageUrlBuilder from "@sanity/image-url";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Blog = ({ posts }) => {
  return (
    <div className="m-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {posts.map((post) => (
          <Card
            title={post.title}
            key={post.title}
            url="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const posts = await client.fetch(
    `
    *[_type == "post"]{title}
  `
  );
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
