import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante segunda edição do evento DevSuperior
      <div className="footer-icons">
        <a href="#" target="_new">
          <YoutubeIcon />
        </a>
        <a href="#" target="_new">
          <LinkedinIcon />
        </a>
        <a href="#" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
