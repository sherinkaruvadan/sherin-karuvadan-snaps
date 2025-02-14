import "./FooterSocialLinks.scss";
import facebookIcon from "../../assets/images/Facebook.svg";
import twitterIcon from "../../assets/images/X_twitter.svg";
import instagramIcon from "../../assets/images/Instagram.svg";
import pinterestIcon from "../../assets/images/Pinterest.svg";

export default function FooterSocialLink() {
  return (
    <div className="footer__icons">
      <a href="https://www.facebook.com/">
        <img src={facebookIcon} alt="Facebook Icon" className="footer__icon" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={twitterIcon} alt="Twitter Icon" className="footer__icon" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={instagramIcon} alt="Instagram Icon" className="footer__icon" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={pinterestIcon} alt="Pinterest Icon" className="footer__icon" />
      </a>
    </div>
  );
}
