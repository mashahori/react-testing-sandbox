import { useState } from "react";

export const Tabs = () => {
  const [mode, setMode] = useState("tab1");

  const handleClick = (e) => {
    if (!e.target) return;
    setMode(e.target.id);
  };

  return (
    <>
      <div onClick={handleClick}>
        <button type="button" id="tab1">
          Tab1
        </button>
        <button type="button" id="tab2">
          Tab2
        </button>
        <button type="button" id="tab3">
          Tab3
        </button>
      </div>
      <div>
        {
          {
            tab1: <div>Content1</div>,
            tab2: <div>Content2</div>,
            tab3: <div>Content3</div>,
          }[mode]
        }
      </div>
    </>
  );
};
