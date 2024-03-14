import React from 'react'
import Button from 'react-bootstrap/Button';
import ararat from './Assets/ararat.png'
import screenshot from './Assets/screenshot.png'
import { FaHotel, FaShoppingCart, FaShippingFast, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import './LandPage.css'
import { useNavigate } from 'react-router-dom';
import DownloadPage from './DownloadPage';

function LandPage() {
    const navigate = useNavigate();
  return (
    <>
    <header>
        <div className='top-bar'>
            <div className='brand-logo'>
                <img src={ ararat } 
                style={{width: '100px', marginLeft: '40px', marginTop: '30px'}} 
                alt='logo'/>
            </div>
            <div className='social-icons'>

            </div>
            <div className='header-section'>
                <div className='text-control'>
                    <p>VYAKULA, BIDHAA, HUDUMA ZA USAFI.</p>
                    <h1>Mahitaji Yote Ya Muhimu Kwenye App Moja</h1>
                    <Button variant='light'
                    onClick={ () => navigate(<DownloadPage/>) }
                    style={{
                        marginTop: '50px'
                    }}>
                        <h4 style={{
                        fontFamily: 'fontRegular',
                        margin: '10px'}}>Anza Sasa &rarr;</h4>
                    </Button>
                </div>
                <div className='image-center'>
                    <img src={ screenshot } alt='screenshot'/>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div className='main-1'>
            <div className='main-1-1'>
                <p>KUWA MTEJA WETU WA VIP</p>
                <h1>Nunua, Tumia, Lipa kidogo kidogo</h1>
            </div>
            <div className='main-1-2'>
                <div className='mgahawa'>
                    <FaHotel size={90} style={{color: 'grey', marginLeft: '95px'}}/>
                    <h3>MIGAHAWA</h3>
                    <p>Fahamu Migahawa iliyo karibu nawe</p>
                </div>
                <div className='maduka'>
                    <FaShoppingCart size={90} style={{color: 'grey', marginLeft: '80px'}} /> 
                    <h3>MADUKA</h3>
                    <p>Hudumiwa na mawakala wetu walio <br/> karibu nawe</p>
                </div>
                <div className='usafiri'>
                    <FaShippingFast size={90} style={{color: 'grey', marginLeft: '135px'}} />
                    <h3>TUNAKULETEA ULIPO</h3>
                    <p>Wasafirishaji wetu watakuletea mahitaji yako hadi ulipo</p>
                </div>
            </div>
        </div>
        <div className='main-2'>
            <div>

            </div>
            <div>

            </div>
        </div>
    </main>
    <footer>
        <div className='footer-control'>
            <div className='footer-1'>
                <img src={ ararat } style={{width: '120px'}} alt='logo'/>
                <p style={{padding: '10px', paddingBottom: '20px' }} >Nunua Mahitaji ya Nyumbani, Vyakula na <br/>Bidhaa Mbalimbali Kutoka Kwenye Maduka, <br/> Mawakala na Washirika Wetu</p>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <div style={{padding: '10px' }}  >
                        <FaFacebook size={30} />
                    </div>
                    <div style={{padding: '10px' }}  > 
                        <FaTwitter  size={30}/>    
                    </div>
                    <div style={{padding: '10px' }}  >
                        <FaInstagram  size={30}/>
                    </div>
                    <div style={{padding: '10px' }}  >
                        <FaWhatsapp  size={30}/>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className='lower-footer'>
            <p>Ararat Food & Stores © 2024. All Rights Reserved. Developed By Werenium Technologies LTD</p>
        </div>
    </footer>
    </>
  )
}

export default LandPage