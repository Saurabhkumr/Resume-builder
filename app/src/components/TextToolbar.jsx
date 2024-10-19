import React from 'react';

const TextToolbar = ({ selectedDiv, onChange }) => {
  if (!selectedDiv) return null;

  const { isBold, isItalic, isUnderline, fontSize, fontFamily } = selectedDiv;

  return (
    <div class="flex relative gap-2.5 items-center mt-24 z-[999]">
      <select value={fontFamily} onChange={(e) => onChange('fontFamily', e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
      </select>

      <input
        type="number"
        value={fontSize}
        onChange={(e) => onChange('fontSize', Number(e.target.value))}
        class="w-[40px]"
      />

      <button className='button' onClick={() => onChange('isBold', !isBold)} style={{ fontWeight: isBold ? 'bold' : 'normal' }}>B</button>
      <button className='button' onClick={() => onChange('isItalic', !isItalic)} style={{ fontStyle: isItalic ? 'italic' : 'normal' }}>I</button>
      <button className='button' onClick={() => onChange('isUnderline', !isUnderline)} style={{ textDecoration: isUnderline ? 'underline' : 'none' }}>U</button>
      <button className='button' >Insert from templates</button>
      <button className='button' >Print</button>
      <button className='button' >Hyperlink</button>
      <input style={{border:'none', height:'30px',}}type='color'></input>
      <button className='button' >+</button>
      <button className='button' >-</button>
    </div>
  );
};

export default TextToolbar;
