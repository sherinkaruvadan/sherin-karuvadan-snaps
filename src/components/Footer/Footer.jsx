import FooterLinkList from "./FooterLinkList"
import FooterSocialLink from "./FooterSocialLink";
export default function Footer(){
    const leftLinks = ["For photographers", "Hire talent", "Inspiration"];
    const rightLinks = ["About", "Career", "Support"];
    const socialLinks = ["facebook", "Twitter", "Instagram", "Pinterest"];
    const legalLinks = ["Terms", "Policy", "Cookies"];

    return(
        <footer className="footer">
            <h2 className="wordMark">Snaps</h2>
            <FooterLinkList links={leftLinks} />
            <FooterLinkList links={rightLinks} />
            <FooterLinkList links={socialLinks} />
        </footer>
    )
}