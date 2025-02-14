import "./Footer.scss"
import FooterLinkList from "./FooterLinkList"
import FooterSocialLink from "./FooterSocialLink";
import FooterLegalLinks from "./FooterLegalLinks";
import Wordmark from "../Wordmark/Wordmark";
export default function Footer(){
    const leftLinks = ["For photographers", "Hire talent", "Inspiration"];
    const rightLinks = ["About", "Career", "Support"];
    const legalLinks = ["Terms", "Policy", "Cookies"];

    return(
        <footer className="footer">
            <Wordmark />
            {/* <h2 className="footer__wordmark logo">Snaps</h2> */}
            <FooterLinkList links={leftLinks} />
            <FooterLinkList links={rightLinks} />
            <FooterSocialLink />
            <FooterLegalLinks links={legalLinks} />
        </footer>
    )
}