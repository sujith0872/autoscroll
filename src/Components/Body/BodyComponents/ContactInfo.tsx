import * as React from 'react';
import { ContactInformation, KeysToDisplay } from '../../../Utils/Enums';

import { ShowInfo } from './ShowInfo';

export const ContactInfo:React.FC = () => {
    const containerStyle:React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow:'hidden',
        backgroundColor:'transparent',
        justifyContent:'space-evenly',
        border: '1px solid #ccc',
        borderRadius: '4px',
        paddingLeft:'8px'
        };
        
    return <div style={{display:'grid',gridTemplateColumns: '50% 50%',padding:16,paddingTop:48}}><div style={{alignItems:'flex-end',display:'flex',flexDirection:'column'}}>
    <img alt="" src="user.png"/>
    </div><div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',...containerStyle}} className="contact-info">
        {Object.keys(KeysToDisplay).map((val,index) => 
            <ShowInfo key={index} detailName={val} value={ContactInformation[KeysToDisplay[val as keyof typeof KeysToDisplay] as keyof typeof ContactInformation]}/>
        )}
    </div>
    
    </div>
}