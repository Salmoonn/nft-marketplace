import SubForm from './SubForm'
import SubForm2 from './SubForm2'

import '../style/Footer.css'

import logo from '../img/logo.svg'
import logoName from '../img/logoName.svg'
import discord from '../img/discord.svg'
import youtube from '../img/youtube.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'

export default function Footer() {
  return (
    <div className='footer-bg'>
      <div className='footer wrapper'>
        <div className='footer-info'>
          <div className='footer-info-info'>
            <div className='footer-logo'>
              <img src={logo} />
              <img src={logoName} />
            </div>
            <div className='footer-additional-info'>
              <div className='base-body-work'>
                NFT marketplace UI created with Anima for Figma
              </div>
              <div className='footer-community'>
                <div className='base-body-work'>
                  Join our community
                </div>
                <div className='footer-icons'>
                  <a href='/'><img src={discord} /></a>
                  <a href='/'><img src={youtube} /></a>
                  <a href='/'><img src={twitter} /></a>
                  <a href='/'><img src={instagram} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-explore'>
            <div className='space-mono h5'>Explore</div>
            <div className='footer-explore-body'>
              <a href='/'><div className='base-body-work'>Marketplace</div></a>
              <a href='/'><div className='base-body-work'>Ranking</div></a>
              <a href='/'><div className='base-body-work'>Connect a wallet</div></a>
            </div>
          </div>
          <div className='footer-sub'>
            <div className='space-mono h5'>Join Our Weekly Digest</div>
            <div className='footer-sub-body'>
              <div className='base-body-work footer-sub-body-text'>Get exclusive promotions & updates straight to your inbox.</div>
              <div className='footer-subForm not-mobile'>
                <SubForm />
              </div>
              <div className='only-mobile'>
                <SubForm2 />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-copy caption-work'>
          Ⓒ NFT Market. Use this template freely
        </div>
      </div>
    </div>
  )
}