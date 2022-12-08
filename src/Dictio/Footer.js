import React from 'react'
import './Dic.css'


function Footer() {
    return (
        <div>
            <div className="all">
                <div className="all1">
                    <img src='Group 208.png' className='pic1' alt='Group 208'></img>
                    <img src='Group 205.png' className='pic2' alt='Group 205'></img>
                </div>
                <div className="all2">
                    <div className='word1'>WORDLEENS</div>
                    <div className='word2'>The API used to serve this data was provided by dictionaryapi.dev, click on the link below to read more</div>
                    <div className='word3'>Visit API documentation</div>
                </div>
                <div className="all3">
                    <img src='Group 207.png' className='pic3' alt='Group 207'></img>
                    <img src='Group 209.png' className='pic4' alt='Group 209'></img>
                </div>
            </div>

            <div className='last'>
            <div className='last1'> <span  className='wid'>Wordlens</span> </div>
            <div className='last2'>
                <div></div>
                <div>Copyright © 2021 Wordlens. All rights reserved.</div>
            </div>
            <div className='last3'></div>
            </div>
        </div>
    )
}

export default Footer
