import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">Ridha Chehime</h1>
        <h2 className="text-xl text-gray-400 mb-6">Cybersecurity Student & Future Ethical Hacker</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Dedicated to securing digital landscapes with hands-on knowledge of Linux, programming, and threat analysis.
          Exploring ethical hacking, vulnerability detection, and system hardening every single day.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
        >
          View Projects
        </Link>
      </section>

      {/* About Section */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
          <p className="text-gray-400 leading-relaxed">
            I’m a passionate cybersecurity student aiming to gain real-world experience in ethical hacking,
            network defense, and digital forensics. I’m comfortable with both Linux and Windows environments
            and always on the lookout for new CTFs and learning opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
            <li>• Python</li>
            <li>• Java</li>
            <li>• C / Bash</li>
            <li>• HTML / CSS</li>
            <li>• JavaScript</li>
            <li>• OWASP ZAP</li>
            <li>• Wireshark / Nmap</li>
            <li>• Burp Suite</li>
            <li>• Snort IDS</li>
            <li>• Linux (Ubuntu, Fedora)</li>
            <li>• Windows Admin</li>
            <li>• Time Management</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
