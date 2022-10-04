// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage,
    body = [],
  } = post;
  return (
    <main>
      <article className="m-20  shadow-md rounded-lg border border-gray-200 flex flex-col items-center justify-center dark:border-gray-700 dark:bg-gray-800 ">
        <div className="m-10">
          <h1 className="text-4xl tracking-wide flex justify-center font-bold">
            {title}
          </h1>
          <div className="flex flex-center justify-center mt-3">
            <span className="bg-primary-100 text-primary-800 text-xs  justify-center font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                ></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
              </svg>
              {categories}
            </span>
          </div>

          {/* {authorImage && (
          <div>
            <img
              src={urlFor(authorImage).width(50).url()}
              alt={`${name}'s picture`}
            />
          </div>
        )} */}
          {mainImage && (
            <div className="my-5 flex justify-center items-center">
              <img
                className=" w-3/5 h-96 rounded-md object-cover"
                src={urlFor(mainImage).url()}
                alt={`${name}'s picture`}
              />
            </div>
          )}
          <div className="text-lg leading-loose sm:m-0 sm:text-xl md:m-10 lg:m-20">
            <PortableText value={body} components={ptComponents} />
          </div>
        </div>
      </article>
      <hr className="max-w-lg my-5 mx-auto border border-gray-500" />
    </main>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  description,
  mainImage,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
