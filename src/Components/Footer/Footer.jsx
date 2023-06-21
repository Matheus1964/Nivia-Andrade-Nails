import './Footer.css'

import { ReactComponent as Youtube_logo } from '../../assets/youtube_icon.svg'
import { ReactComponent as Facebook_logo } from '../../assets/fb_social_icon.svg'
import { ReactComponent as Instagram_logo } from '../../assets/instagram_icon.svg'
import { ReactComponent as Tiktok_logo } from '../../assets/tik_tok_icon.svg'

//Preencher as tags <a></a> com os links das redes sociais

function Footer() {
  return(
    <div className="footer">
      <div className="section_padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4 className="footer-title">Nivia Andrade Nails</h4>
            <div className="socialmedia">
            <p>
                <a href="#"> {/*Colocar Link do Youtube*/}
                  <Youtube_logo className="icon"/>
                </a>
              </p>
              <p>
                <a href="#"> {/*Colocar Link do Facebook*/}
                  <Facebook_logo className="icon" alt=""/>
                </a>
              </p>
              <p>
                <a href="https://instagram.com/nivia.andrade.nails?igshid=ZWQyN2ExYTkwZQ==" target="_blank"> {/*Colocar Link do Instagram*/}
                  <Instagram_logo className="icon" alt=""/>
                </a>
              </p>
              <p>
                <a href="#"> {/*Colocar Link do Tiktok*/}
                  <Tiktok_logo className="icon" alt=""/>
                </a>
              </p>
            </div>

          </div>
        </div>

      <hr></hr>

      <div className="copyright_div">
        <div className="footer-copyright">
          <p>
          &copy;{new Date().getFullYear()} Nivia Andrade Nails. Todos os direitos reservados.
          </p>
        </div>

      </div>

      </div>
    </div>
      
  )
}

export default Footer;
