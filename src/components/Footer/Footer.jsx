import "./Footer.scss"
import Wordmark from "../Wordmark/Wordmark";
import FooterLinkList from "../FooterLinkList/FooterLinkList";
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";
import FooterLegalLinks from "../FooterLegalLinks/FooterLegalLinks";
export default function Footer(){
    const leftLinks = ["For photographers", "Hire talent", "Inspiration"];
    const rightLinks = ["About", "Career", "Support"];
    const legalLinks = ["Terms", "Policy", "Cookies"];

    return(
        <footer className="footer">
            <Wordmark />
            <FooterLinkList links={leftLinks} />
            <FooterLinkList links={rightLinks} />
            <FooterSocialLinks />
            <FooterLegalLinks links={legalLinks} />
        </footer>
    )
}