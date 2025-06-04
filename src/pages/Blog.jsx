import BlogPost from "../components/BlogPost";
import posts from "../data/posts.json";

const Blog = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">
        Blog & Cybersecurity News
      </h2>

      {/* Personal Blog Posts */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-4">My Posts</h3>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
      </section>

      {/* Embedded Cybersecurity News Feed */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-4">Latest Cybersecurity News</h3>
        <iframe
          src="https://feed.mikle.com/widget/v2/173324/?preloader-text=Loading&"
          height="402px"
          width="100%"
          className="fw-iframe rounded border border-gray-700"
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </section>
    </div>
  );
};

export default Blog;
