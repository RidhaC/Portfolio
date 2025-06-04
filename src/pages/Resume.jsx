const Resume = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">My Resume</h2>

      {/* Embedded PDF viewer */}
      <div className="w-full aspect-[4/3] md:aspect-[3/2] mb-6 border-2 border-gray-700 rounded">
        <iframe
          src="/Ridha_Chehime_Resume.pdf"
          title="Resume"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Download button */}
      <a
        href="/Ridha_Chehime_Resume.pdf"
        download
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
      >
        Download PDF
      </a>
    </div>
  );
};

export default Resume;
