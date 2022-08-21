import React from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import { IconContext } from "react-icons";
// import { FaRegHeart, FaShareSquare, FaRupeeSign } from "react-icons/fa";
// import { BackgroudImage } from "./styled";
// const ResponsiveGridLayout = WidthProvider(Responsive);

function WelcomePage() {
  const currentResolution = window.innerWidth;
  let currCols = 2;
  switch(true) {
    case currentResolution >= 1200 :
      currCols = 12;
      break;
    case currentResolution >= 996 && currentResolution < 1200:
      currCols = 10;
      break;
    case currentResolution >= 768 && currentResolution < 996:
      currCols = 6;
      break;
    case currentResolution >= 480 && currentResolution < 768:
      currCols = 4;
      break;
    default:
      currCols = 2;
  }
  const layout = [];
  let prevX = 0, prevY = 0;
  data.forEach((d, i) => {
    const currX = prevX + 2, temp = {i: i.toString(), w: 2, h: 1};
    if (currX === currCols) {
      temp.x = prevX;
      temp.y = prevY;
      prevX = 0;
      prevY += prevY;
    } else {
      temp.x = prevX;
      temp.y = prevY;
      prevX += 2;
    }
    layout.push(temp);
  });
  
  return (
    <div className="welcomePage">
      Welcome Page...
      {/* <ResponsiveGridLayout
        className="layout"
        layouts={{lg: layout}}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={250}
        isDraggable={false}
        isResizable={false}
      >
        {
          data.map((d, i) => {
            return (
              <div className="items" key={i.toString()}>
                <div className="itemContainer">
                  <IconContext.Provider
                    value={{ color: "black", size: "25px" }}
                  >
                    <div className="itemTopRow">
                      <FaRegHeart />
                      <FaShareSquare />
                    </div>
                  </IconContext.Provider>
                  <BackgroudImage />
                  <div className="description">
                    <span>{d.description}</span>
                    <div><FaRupeeSign /> {d.price}</div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </ResponsiveGridLayout> */}
    </div>
  );
}

export default WelcomePage;

const data = [
  {
    name: "Banana Leaf 1",
    price: "5.00",
    description: "Small size banana leaf",
  },
  {
    name: "Banana Leaf 2",
    price: "7.00",
    description: "medium size banana leaf",
  },
  {
    name: "Banana Leaf 3",
    price: "9.00",
    description: "large size banana leaf",
  },
  {
    name: "Banana Leaf 4",
    price: "5.00",
    description: "tiffen banana leaf",
  },
  {
    name: "Banana Leaf 5",
    price: "6.00",
    description: "end banana leaf",
  },
  {
    name: "Banana Leaf 6",
    price: "5.00",
    description: "round banana leaf",
  },
];
