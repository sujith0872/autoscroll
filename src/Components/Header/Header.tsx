import * as React from "react";
import { Icon } from "../../Icons/Icon";
import { BodyComps, HeaderDetails } from "../../Utils/Enums";
import { HeaderButton } from "../../Utils/HeaderButton";

export const Header: React.FC<{bodyref:React.RefObject<HTMLDivElement>}> = ({bodyref}) => {
const generateButtons = () => {
    const buttons = [];
    const scroll = (i:number) => {
        bodyref.current?.children[i].scrollIntoView({
            behavior:'smooth',
            block:'start',
            inline:'start'
        })
    }
    for(let i=0;i<BodyComps.length;i++){
        buttons.push(<HeaderButton onClick={() =>scroll(i)} title={BodyComps[i].title} key={i}/>)
    }
    return buttons.map(but => but);
}
  return (
    <div style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width:'fit-content',
        //   boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          padding:'0px 8px',
          height:'100%'
        }}
      >
        <div style={{ width: "40px", height: "40px" }}>
          <Icon />
        </div>
        <h3 style={{ marginLeft: "8px" }}>{HeaderDetails.Title}</h3>
      </div>
      <div>
        {generateButtons()}
      </div>
    </div>
  );
};
