import React, { useRef, useEffect, useState } from 'react';
import DraggableDiv from './DraggableDiv';
import TextToolbar from './TextToolbar';

const TextArea = () => {
  const areaRef = useRef(null);
  const [areaBounds, setAreaBounds] = useState({ width: 50, height: 50 });

  // Store all draggable divs' states
  const [draggables, setDraggables] = useState([
    { id: '1', text: 'Email', isBold: false, isItalic: false, isUnderline: false, fontSize: 18, fontFamily: 'Times New Roman', position: { x: 150, y: 100 }  },
    { id: '2', text: 'Phone', isBold: false, isItalic: false, isUnderline: false, fontSize: 18, fontFamily: 'Times New Roman', position: { x: 150, y: 700  }  },
    { id: '3', text: 'Education', isBold: false, isItalic: false, isUnderline: false, fontSize: 18, fontFamily: 'Times New Roman', position: { x: 150, y: 234 }  },
    { id: '4', text: 'Experience', isBold: false, isItalic: false, isUnderline: false, fontSize: 18, fontFamily: 'Times New Roman', position: { x: 150, y: 542 }  },
    { id: '5', text: 'Skills', isBold: false, isItalic: false, isUnderline: false, fontSize: 18, fontFamily: 'Times New Roman', position: { x: 150, y: 1 }  },
  ]);

  // The currently selected draggable div
  const [selectedDivId, setSelectedDivId] = useState('1');

  const updateItem = (id, updatedData) => {
    setDraggables((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
  };

  const updateSelectedDiv = (property, value) => {
    setDraggables((prevDraggables) =>
      prevDraggables.map((div) =>
        div.id === selectedDivId ? { ...div, [property]: value } : div
      )
    );
  };

  useEffect(() => {
    if (areaRef.current) {
      const { offsetWidth, offsetHeight } = areaRef.current;
      setAreaBounds({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  const handleDivClick = (id) => {
    setSelectedDivId(id);  // Set selected div when clicked
  };

  return (
    <>
      <TextToolbar
        selectedDiv={draggables.find(div => div.id === selectedDivId)} // Pass the selected div's data
        onChange={updateSelectedDiv}
      />

      <div   class="w-[80%] h-[1900px] left-[10%] border border-[#ccc] rounded-none p-5 shadow-[0px_2px_5px_rgba(0,0,0,0.1)] font-sans text-[29px] leading-[1.5] bg-white mt-2.5 mb-[80px] shadow-[12px_12px_20px_10px_rgba(255,255,255,0.035)] relative border-black focus:outline-none focus:border-[#4a90e2]" ref={areaRef} >
        {draggables.map((draggable) => (
          <DraggableDiv
            key={draggable.id}
            bounds={areaBounds}
            data={draggable}
            updater={updateItem}
            onClick={() => handleDivClick(draggable.id)} // Click to select the div
            isSelected={draggable.id === selectedDivId} // Highlight or mark selected div
          />
        ))}
      </div>
    </>
  );
};

export default TextArea;
