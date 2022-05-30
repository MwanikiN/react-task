import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import "..//styles/Contact.css";

function Contact() {
  return (
    <>
      <footer className="">
        <div className="cont-container">
          <h3 className="contact-header">
            <i>Contact</i>
          </h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:neemaclare@gmail.com">
                <AiOutlineMail />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/claire_neemah">
                <BsTwitter />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/neema-mwaniki/">
                <AiFillLinkedin />{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/MwanikiN">
                <AiFillGithub />{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Contact;
