import React from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import ararat from './Assets/ararat.png';
import screenshot from './Assets/screenshot.png';

function DownloadPage() {
  return (
    <>
      <div className='topBar'>
        
          <img src={ ararat } 
          style={{margin: '10px', width:"150px", paddingLeft: '20px'}}
          alt='logo'/>

      </div>
      <div className='flex-container'>
          <div className='download-text'>
              <h1>Click Here to Download</h1>
              <Button variant='success'style={{width: '150px', marginTop: '20px'}}>Download</Button>
              
          </div>
           <div className='image-div'>
              <img src={screenshot} 
              style={{height: '500px', margin:'10px'}}
              className='center-image' alt='image1'/>
           </div>
           
      </div>
      
      
    </>
  )
}

export default DownloadPage