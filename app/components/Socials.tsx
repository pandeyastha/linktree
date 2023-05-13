import data from "@/data.json"
import { FaTwitter, FaInstagram,FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';


const Socials = () => {
    return (
    <div className="flex items-center gap-4 mt-8 text-white">
        {data.social.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.title=== 'Twitter'? <FaTwitter size={30}/>:null}
            {social.title=== 'Instagram'? <FaInstagram size={30}/>:null}
            {social.title=== 'Github'? <FaGithub size={30}/>:null}
            {social.title=== 'Linkedin'? <FaLinkedin size={30}/>:null}
            {social.title=== 'Facebook'? <FaFacebook size={30}/>:null}
            {social.title=== 'Mail'? <FaEnvelope size={30}/>:null}
            {social.title=== 'Tiktok'? <FaTiktok size={30}/>:null}
          </a>
        ))}
    </div>  );
}
 
export default Socials;