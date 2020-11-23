import React from 'react';
import classes from './DeviceList.module.css';

//This is Hard coded object, we can integrate the actual service here by using axios
const DeviceList = props => {
    const deviceInfo = [
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/iphone-12-pro-max-gold-hero.png',
        modelNo: 'iPhone 12 Pro Max',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/iPhone-12-Pro-Max'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/iphone-12-pro-blue-hero.png',
        modelNo: 'iPhone 12 Pro',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/iPhone-12-pro'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/iphone-12-blue-select-2020.png',
        modelNo: 'iPhone 12',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/iPhone-12'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/iphone-12-mini-green-select-2020.png',
        modelNo: 'iPhone 12 Mini',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/iPhone-12-mini'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/ipad-air-select-wifi-spacegray-.png',
        modelNo: 'iPad Air 2020',
        vendor: 'Internet',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/ipad-air-2020'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/Cloud-Lavender_s20FE.png',
        modelNo: 'Galaxy S20 FE',
        vendor: 'Samsung',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/Galaxy-S20-FE-5G'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/HUAWEI--Matebook-D14_SELIVER.png',
        modelNo: 'Huwaei MateBook D 14',
        vendor: 'Huawei',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/MateBook-D14'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/xbox-s.png',
        modelNo: 'Xbox S',
        vendor: 'Internet',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/Xbox-Series-S'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/Image.png',
        modelNo: 'HUAWEI MatePad 4G',
        vendor: 'Huawei',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/Huawei-Mate-Pad'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/Watch_se.png',
        modelNo: 'Watch Series SE',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/watch-series-6-se'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/watch_6.png',
        modelNo: 'Watch Series 6',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/watch-series-6'
      },
      {
        imgSrc: 'https://www.stc.com.kw/sites/stc/en_US/ipad-2020-hero-space-wifi-select.png',
        modelNo: 'iPad 8th generation',
        vendor: 'Apple',
        infoUrl: 'https://www.stc.com.kw/sites/stc/en/m/iPad-8th-Generation'
      }
    ];
    return (
        <div className={classes['device-cnt-wrapper']}>
          <div className={classes['static-container']+' '+classes['device-list-container']}>
            <ul className={classes['card-lists']+' '+classes['d-flex']+' '+
              classes['flex-wrap']+' '+classes['cols-3']+' '+classes['align-all-center']}>
                {deviceInfo.map(info => (
                  <li className={classes['card-item']}>
                  <div className={classes['card-wrapper']}>
                    <div className={classes['img-block']+' '+classes['iphone-img']}>
                      <img src={info.imgSrc} alt={info.modelNo}/>
                    </div>
                    <div className={classes['card-content']+' '+classes['card-content-with-button']}>
                      <h5>{info.modelNo}</h5>
                      <p>{info.vendor}</p>
                      <a href={info.infoUrl} target='__blank' className={classes['btn-violet-small']}>
                        Know More</a>
                    </div>
                  </div>
                </li>
                ))}
            </ul>
          </div>
        </div>
    );
}

export default DeviceList;
