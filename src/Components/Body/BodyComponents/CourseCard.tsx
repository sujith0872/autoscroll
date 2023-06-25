import * as React from "react";
import { ICourseCard } from "./CoursesCorrosal";
import useWindowWidth from "../../../Utils/hooks/useWindowWidth";

export const CourseCard: React.FC<{
  data: ICourseCard;
  noofcols: number;
}> = ({ data, noofcols }) => {
    const width = useWindowWidth();
  return (
    <div>
      <button
        key={data.id}
        type="button"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: `${(width/noofcols)-32}px`,
          backgroundColor: "transparent",
          border: '1px solid #ccc',
          margin:'0px 16px 16px 16px'
        }}
        
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            zIndex: 3,
          }}>
          <img
            alt={data.title}
            style={{ width: "100%", height: "200px",borderBottom:'1px solid #ccc' }}
            src={data.icon}
          />
          <div style={{margin:'8px',textAlign: "left",
            }}>
          <h3 style={{ margin: 0 }}>{data.title}</h3>
          <p style={{ textAlign: "left" }}>{data.description}</p>
          </div>
        </div>
      </button>
    </div>
  );
};
