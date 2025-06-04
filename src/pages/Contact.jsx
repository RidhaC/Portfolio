import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Let's Connect</h2>
      <p className="text-center text-gray-400 mb-10">
        Whether you have a question, want to collaborate, or just want to say hi —
        my inbox is always open.
      </p>

      {/* Contact Icons with Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <a
          href="mailto:ridhachehime0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaEnvelope className="mx-auto text-4xl mb-2" />
          <p className="text-sm text-gray-300">ridhachehime0@gmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/ridha-chehime"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin className="mx-auto text-4xl mb-2" />
          <p className="text-sm text-gray-300">linkedin.com/in/ridha-chehime</p>
        </a>

        <a
          href="https://github.com/RidhaC"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub className="mx-auto text-4xl mb-2" />
          <p className="text-sm text-gray-300">github.com/RidhaC</p>
        </a>
      </div>

      <p className="mt-12 text-center text-sm text-gray-600">
        &copy; 2025 Ridha Chehime • Built with 💻 and ☕
      </p>
    </div>
  );
};

export default Contact;
