const BlogPost = ({ title, date, content }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition duration-300 mb-6">
      <h3 className="text-xl text-blue-400 font-semibold mb-2">{title}</h3>
      <span className="text-sm text-gray-500">{new Date(date).toDateString()}</span>
      <p className="text-gray-300 text-sm mt-2">{content}</p>
    </div>
  );
};

export default BlogPost;
