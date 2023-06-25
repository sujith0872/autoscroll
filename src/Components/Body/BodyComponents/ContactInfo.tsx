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
        padding:'8px',
        flexWrap:'wrap'
        };
        
    return <><div>
    <h2 className="Title">Instructor info</h2>
  </div><div style={{display:'flex',flexDirection:'row',padding:16,paddingTop:48,flexWrap:'wrap',justifyContent:'center'}}><div style={{alignItems:'flex-end',display:'flex',flexDirection:'column'}}>
    <img alt="" src="user.png"/>
    </div><div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'fit-content',...containerStyle}} className="contact-info">
        {Object.keys(KeysToDisplay).map((val,index) => 
            <ShowInfo key={index} detailName={val} value={ContactInformation[KeysToDisplay[val as keyof typeof KeysToDisplay] as keyof typeof ContactInformation]}/>
        )}
    </div>
    
    </div></>
}