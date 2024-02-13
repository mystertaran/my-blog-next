import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.github.com/mystertaran/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={32} className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href="https://www.linkedin.com/in/szymon-taranczewski/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={32} color="#0077B5" className="hover:scale-125 transition-all ease duration-200"/>
      </a>
    </div>
  );
};

export default Socials;
