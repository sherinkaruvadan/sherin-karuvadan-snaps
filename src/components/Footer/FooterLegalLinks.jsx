import FooterLegalLink from "./FooterLegalLink"

export default function FooterLegalLinks({links}){
return(
    <div className="footer__legalLinks">
        <p className="copyright">&copy;2024 Snaps</p>
        {links.map((link,id)=>{
            return <FooterLegalLink key={id} link={link} />
        })}
    </div>
)
}