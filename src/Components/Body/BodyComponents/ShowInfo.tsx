import React, { FC } from 'react';

interface ShowInfoProps {
detailName: string;
value: string;
}

export const ShowInfo: FC<ShowInfoProps> = ({ detailName, value }) => {


const detailNameStyle = {
fontWeight: 'bold',
marginBottom: '5px',
minWidth: 'fit-content',
};

const valueStyle:React.CSSProperties = {
fontSize: 14,
color: '#333',
paddingLeft:'8px'
};

return (
<div style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
<h3 style={detailNameStyle}>{detailName} - </h3>
<span style={valueStyle}>{value}</span>
</div>
);
};

export default ShowInfo;