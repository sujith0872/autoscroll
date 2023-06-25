import * as React from "react";
import { CourseCard } from "./CourseCard";
import useWindowWidth from "../../../Utils/hooks/useWindowWidth";
import { useCorrosal } from "../../../Utils/hooks/useCorrosal";

export interface ICourseCard {
  id: string;
  title: string;
  icon: string;
  description: string;
}
export const CoursesCorrosal: React.FC = () => {
  const courseInfo: ICourseCard[] = React.useMemo(
    () => [
      {
        id: "c",
        title: "Learn C",
        icon: "https://store-images.s-microsoft.com/image/apps.40126.14224727330192393.9724b05b-39ba-43b5-a952-9d1d74f99f77.2e7758e3-7e73-4e32-8cbb-7917eac099b2?mode=scale&q=90&h=1080&w=1920",
        description:
          "Learn C language. This is a great starting point if you want to build stuff like pc games etc.",
      },
      {
        id: "c++",
        title: "Learn C++",
        icon: "https://th.bing.com/th/id/OIP.yQ9vkQZHCoZnpR1u5PweggHaDr?pid=ImgDet&rs=1",
        description:
          "Learn C++ language. It has simpler syntax and added supportability of OOPS concepts provides a good and structure way of programming.",
      },
      {
        id: "java",
        title: "Learn Java",
        icon: "https://www.computercareers.org/wp-content/uploads/learn-java.jpg",
        description:
          "Learn java language. If you are working for web applications you stumbled on one of the best and high coummunity support available for help.",
      },
      {
        id: "kotlin",
        title: "Learn Kotlin",
        icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/kotlinlang_logo_icon_170356.png",
        description:
          "Learn kotlin language. If you are working for web applications you stumbled on one of the best and high coummunity support available for help.",
      },
      {
        id: "golang",
        title: "Learn Golang",
        icon: "https://miro.medium.com/max/3152/1*Ifpd_HtDiK9u6h68SZgNuA.png",
        description:
          "Learn Golang language. Developed an maintained by google its fairly new with faster builds when compared to other languages but it has less community support. Uses: Web applications etc.",
      },
      {
        id: "sql",
        title: "Learn SQL",
        icon: "https://oracle-patches.com/images/2020/07/22/SQL-Programming-Language_large.jpg",
        description:
          "Learn SQL language.It is used to communincate with your structured database. This course freshly starts from setting up your db.",
      },
    ],
    []
  );
  const { currentIndex,handleNext, handlePrev } = useCorrosal(courseInfo.length);

  const width = useWindowWidth();
  const getColumns = (width: number) => {
    if (width <= 400) {
      return 1;
    } else if (width < 600) {
      return 2;
    } else if (width < 900) {
      return 3;
    } else if (width <1200) {
      return 4;
    } else {
      return 5;
    }
  };
  const [noofcols, setNooCols] = React.useState<number>(getColumns(width));
  React.useEffect(() => {
    setNooCols(getColumns(width));
  }, [width]);

  return (
    <><div>
      <h2 className="Title">Some courses offered by us</h2>
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "clip",
      }}
    >
      <button
        title="<"
        type="button"
        className="Corrosal-button Corrosal-button-left"
        disabled={currentIndex ===1 }
        style={{ top: "unset" }}
        onClick={() => {
          if(currentIndex !==1){
          handlePrev();
          }
        }}
      >
        {"<"}
      </button>
      <div style={{ display: "flex", flexDirection: "row", marginTop:'16px',paddingRight:'16px',transform:`translate(${-(currentIndex-1)*((width/noofcols))}px,0px)`,transition:'transform 1s'}} >
        {courseInfo.map((course) => (
          <CourseCard key={course.id} data={course} noofcols={noofcols} />
        ))}
      </div>
      <button
        title=">"
        type="button"
        className="Corrosal-button Corrosal-button-right"
        style={{ top: "unset" }}
        disabled={courseInfo.length < noofcols+currentIndex}
        onClick={() => {
          if(courseInfo.length >= noofcols+currentIndex){
            handleNext();
          }
          
        }}
      >
        {">"}
      </button>
    </div>
    </>
  );
};
