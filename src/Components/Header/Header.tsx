import * as React from "react";
import { Icon } from "../../Icons/Icon";
import { BodyComps, HeaderDetails } from "../../Utils/Enums";
import { HeaderButton } from "../../Utils/HeaderButton";
import useWindowWidth from "../../Utils/hooks/useWindowWidth";

export const Header: React.FC<{bodyref:React.RefObject<HTMLDivElement>}> = ({bodyref}) => {
const generateButtons = (menuItem?:boolean,setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const buttons = [];
    const scroll = (i:number) => {
      setIsOpen && setIsOpen(false);
        bodyref.current?.children[i].scrollIntoView({
            behavior:'smooth',
            block:'start',
            inline:'start'
        })
    }
    for(let i=0;i<BodyComps.length;i++){
        buttons.push(<HeaderButton  key={i} menuMode={menuItem || false} buttonProps={{onClick:() =>scroll(i), title:BodyComps[i].title}}/>)
    }
    return buttons.map(but => but);
}
const [isOpen,setIsOpen] = React.useState<boolean>(false);
const menuRef = React.useRef<HTMLDivElement>(null);

React.useEffect(() => {
  window.addEventListener('click',(e) => {
    const ele = e.target as HTMLDivElement;
    if(Array.from(menuRef.current?.children || []).findIndex(val => val.className === ele.className)<0 && ele.className !== 'Header-button') {
      setIsOpen(false);
    }
  })
},[])

const width= useWindowWidth();
  return (
    <><div style={{height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
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
      {width > 500 ? <div>
        {generateButtons(false,setIsOpen)}
      </div>:<div>
        <HeaderButton buttonProps={{title:"Menu",onClick:()=>setIsOpen(val=> !val) }} menuMode={false}/>
        </div>}
    </div>
    {isOpen && <div className="Menu-Pop" ref={menuRef} onBlur={() => setIsOpen(false)} onMouseLeave={() => setIsOpen(false)}>
    {generateButtons(true,setIsOpen)}
    </div>}
    </>
  );
};
