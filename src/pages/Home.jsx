import { Link } from "react-router-dom";
import posts from "../data/posts.json";

const Home = () => {
  const latestPost = posts[0]; // Most recent blog post

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">Ridha Chehime</h1>
        <h2 className="text-xl text-gray-400 mb-6">Aspiring Cybersecurity Practitioner & Current Student</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I’m a cybersecurity student at Western Michigan University, passionate about protecting systems and staying ahead of emerging threats. My experience includes hands-on work in network security, ethical hacking, and threat analysis, using tools like Kali Linux, Wireshark, and others. I’m always eager to learn about new security technologies and improve my skills in identifying vulnerabilities. My goal is to continue growing in the cybersecurity field, contributing to teams focused on protecting digital spaces and advancing security practices across industries.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
        >
          View Projects
        </Link>
      </section>

      {/* Blog Post + Skills Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Latest Blog Post */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Latest Blog Post</h3>
          <div className="bg-gray-800 p-5 rounded-md shadow">
            <h4 className="text-xl text-blue-400 font-semibold mb-1">{latestPost.title}</h4>
            <p className="text-sm text-gray-400 mb-2">{new Date(latestPost.date).toDateString()}</p>
            <p className="text-gray-300">{latestPost.content}</p>
            <Link
              to="/blog"
              className="text-blue-400 hover:underline inline-block mt-3"
            >
              Read more posts →
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
          <div className="bg-gray-800 p-5 rounded-md shadow">
            <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
              <li>• Python</li>
              <li>• Java</li>
              <li>• C / Bash</li>
              <li>• HTML / CSS</li>
              <li>• JavaScript</li>
              <li>• OWASP ZAP</li>
              <li>• Wireshark / Nmap</li>
              <li>• Burp Suite</li>
              <li>• ROS</li>
              <li>• Linux (Ubuntu, Fedora)</li>
              <li>• Windows Admin</li>
              <li>• Autonomous Vehicles</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
