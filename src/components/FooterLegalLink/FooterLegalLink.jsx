import "./FooterLegalLink.scss";
export default function FooterLegalLink({link}){
    return(
        <p>
            <a href="#" className="footer__legalLink">{link}</a>
        </p>
    )
}