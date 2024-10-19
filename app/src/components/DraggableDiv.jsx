import React, { useRef, useState } from 'react';

const DraggableDiv = ({ data, bounds, updater, onClick, isSelected }) => {
  const { id, text, fontSize, isBold, isItalic, isUnderline, fontFamily, position } = data;
  const [positions, setPositions] = useState(position);
  const [size, setSize] = useState({ width: 400, height: 50 });
  const divRef = useRef(null);
  const isDragging = useRef(false);
  const isResizing = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e) => {
    if (e.target.tagName !== 'TEXTAREA' && e.buttons === 1) {
      // Only start dragging if the left mouse button is pressed
      e.preventDefault();
      isDragging.current = true;
      divRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    // Ensure that dragging only happens while left-click is held down (e.buttons === 1)
    if (isDragging.current && e.buttons === 1 && !isResizing.current) {
      const newX = positions.x + e.movementX;
      const newY = positions.y + e.movementY;

      // Constrain the movement within the bounds
      const constrainedX = Math.max(0, Math.min(newX, bounds.width - size.width));
      const constrainedY = Math.max(0, Math.min(newY, bounds.height - size.height));

      const newPosition = { x: constrainedX, y: constrainedY };
      setPositions(newPosition);
      updater(id, { ...data, position: newPosition });
    } else if (isResizing.current) {
      const newWidth = Math.max(200, size.width + e.movementX);
      const newHeight = Math.max(50, size.height + e.movementY);
      const newSize = { width: newWidth, height: newHeight };
      setSize(newSize);
      updater(id, { ...data, size: newSize });
    }
  };

  const handleMouseUp = () => {
    // Stop dragging or resizing when mouse is released
    isDragging.current = false;
    isResizing.current = false;
    divRef.current.style.cursor = 'grab';
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Prevent dragging when the mouse leaves the div
    isDragging.current = false;
    setIsHovered(false);
  };

  const handleResizeMouseDown = (e) => {
    e.stopPropagation();
    isResizing.current = true;
  };

  return (
    <div
      ref={divRef}
      class="absolute cursor-grab overflow-hidden flex flex-col rounded-md bg-white"
        style={{
        top: `${positions.y}px`,
        left: `${positions.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        border: isSelected ? '5px solid #8e3c99' : isHovered ? '1px dashed black' : 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave} // Disable dragging when mouse leaves
      onMouseEnter={handleMouseEnter}
      onClick={onClick} // Handle click to select this div
    >
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={(e) => updater(id, { ...data, text: e.target.value })}
        class="w-full h-[90%] bg-transparent border-none text-black resize-none outline-none mr-[300px] overflow-y-auto"
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: isBold ? 'bold' : 'normal',
          fontStyle: isItalic ? 'italic' : 'normal',
          textDecoration: isUnderline ? 'underline' : 'none',
          fontFamily: fontFamily,
        }}
        // onMouseDown={(e) => e.stopPropagation()} // Prevent textarea from initiating dragging
      />
      <div
         class="w-[5px] h-[5px] absolute bottom-0 right-0 cursor-nwse-resize"
         style={{
           backgroundColor: isHovered ? 'black' : 'transparent',
         }}
        onMouseDown={handleResizeMouseDown}
      />
    </div>
  );
};

export default DraggableDiv;


//to create more complex draggable div components we can do the following
//fjsafaf%%asjfkisabf%%jasgbjfa
//divide the text on the basis of %%, but die to this the input and output will be way complicated