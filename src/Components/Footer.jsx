import React from 'react'
import youtubeIcon from '../netflix_react_assets/youtube_icon.png'
import twitterIcon from '../netflix_react_assets/twitter_icon.png'
import instagramIcon from '../netflix_react_assets/instagram_icon.png'
import facebookIcon from '../netflix_react_assets/facebook_icon.png'

const Footer = () => {
  return (
    <div id='footer' className='p-[6%] max-w-[1200px] mx-auto'>
      <div id='footer-icons' className='flex gap-[20px] mb-[30px] w-[30px] cursor-pointer'>
        <img src={youtubeIcon} alt=""  />
        <img src={instagramIcon} alt=""  />
        <img src={twitterIcon} alt=""  />
        <img src={facebookIcon} alt=""  />
      </div>
      <ul className='grid grid-cols-4 gap-[20px]'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investors Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Coookie Informations</li>
        <li>Corporate Informations</li>
        <li>Contact Us</li>
      </ul>
      <p className='mt-10 text-gray-500 '>©️ 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer