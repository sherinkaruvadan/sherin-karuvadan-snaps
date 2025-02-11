import FooterLink from "./FooterLink"
export default function FooterLinkList({links}){

    return(
       <div className="footer__links">
      {links.map((link,id)=>{
        return <FooterLink key={id} link={link} />
      })}
       </div>
    )
}