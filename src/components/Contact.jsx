import {AiOutlineMail} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

import '..//styles/Contact.css'

function Contact(){
    return(
        <div>
            <nav>
                <footer className='contact-nav'>
                   <div className='cont-container'>
                    <h3 className='contact-header'><i>Contact</i></h3>    
                        <ul className='nav-links'>
                            <li><i className='email-icon'><AiOutlineMail/><i><a href='neemaclare@gmail.com'> neemaclare@gmail.com</a></i></i></li>
                            <li><i className='phone-icon'><AiFillPhone/><i> +254 718 586 160</i></i></li>
                            <li><i className='twitter-icon'><BsTwitter/> <a href='https://twitter.com/claire_neemah'> @Nimah</a></i></li>
                            <li><i className='linkedin-icon'><AiFillLinkedin/> <a href='https://www.linkedin.com/in/neema-mwaniki/'> Neema Mwaniki</a></i></li>
                            <li><i className='github-icon'><AiFillGithub/> <a href='https://github.com/MwanikiN'> MwanikiN</a></i></li>
                        </ul>
                   </div>
                </footer>
            </nav>
        </div>
    )}
export default Contact