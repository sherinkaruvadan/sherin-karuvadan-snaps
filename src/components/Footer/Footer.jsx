import FooterLinkList from "./FooterLinkList"
import FooterSocialLink from "./FooterSocialLink";
export default function Footer(){
    const leftLinks = ["For photographers", "Hire talent", "Inspiration"];
    const rightLinks = ["About", "Career", "Support"];
    const socialLinks = ["facebook", "twitter", "instagram", "pinterest"];
    const legalLinks = ["Terms", "Policy", "Cookies"];

    return(
        <footer className="footer">
            <h2 className="wordMark">Snaps</h2>
            <FooterLinkList links={leftLinks} />
            <FooterLinkList links={rightLinks} />
            <FooterSocialLink />
        </footer>
    )
}