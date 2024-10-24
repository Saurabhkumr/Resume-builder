import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const WorkSpace = () => {
  const [resumes, setResumes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [movedIndexes, setMovedIndexes] = useState(new Set()); // Set to track moved indexes
  const [clickedIndex, setClickedIndex] = useState(null); // Track the clicked resume index

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('./src/assets/resume_file_details.csv'); // Ensure this path is correct
        if (!response.ok) throw new Error('Network response was not ok');

        const text = await response.text();
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            console.log('Parsed CSV Data:', results.data); // Log the parsed data

            // Filter valid resumes
            const validResumes = results.data.filter(resume => resume.Filename && resume['Date of Creation']);
            setResumes(validResumes);
            setLoading(false); // Set loading to false once data is fetched
          },
        });
      } catch (error) {
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false on error
      }
    };

    fetchCSV();
  }, []);

  const handleClick = (index) => {
    setClickedIndex(prev => (prev === index ? null : index)); // Toggle clicked state
  };

  if (loading) return <p>Loading resumes...</p>; // Loading feedback
  if (error) return <p>Error loading resumes: {error}</p>; // Error feedback

  return (
    <div
      style={{
        width: '100%',
        height: '1000px',
        margin: 'auto',
        padding: '100px',
        position: 'relative',
        overflow: 'hidden',
        top: '0px',
        backgroundColor: 'black'
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          perspective: '2000px',
        }}
      >
        {resumes.map((resume, index) => {
          const isMoved = movedIndexes.has(index); // Check if this resume is moved
          const isClicked = clickedIndex === index; // Check if this resume is clicked

          return (
            <div
              key={index}
              style={{
                left: isClicked ? '7.5%' : '15%',
                border: '1px solid #ccc',
                padding: '10px',
                width: isClicked ? '85%' : '70%',
                height: '60em',
                borderRadius: '10px',
                position: 'absolute',
                top: isClicked?'0px':`${index * 35 }px`,
                // top: `${index * 35 + (isMoved ? -100 : 0)}px`, // Adjust position based on moved state
                zIndex: isClicked ? 9999 : resumes.length + index, // Set z-index on click
                backgroundColor: hoveredIndex === index ? 'white' : '#242424', // Change color on hover
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                transform: isClicked ? 'none' : 'rotate3d(1, 0, 0, -40deg)', // Remove rotation if clicked
                transition: 'background-color 0.3s, top 0.3s, transform 0.3s', // Smooth transition
                color: 'grey',
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
              onClick={() => handleClick(index)} // Handle click to toggle state
            >
              <>
                <strong>{resume.Filename || 'No Filename'}</strong>
                <i>- Date of Creation: {resume['Date of Creation'] || 'No Date'}</i>
                <div style={{ width: '100%', height: '90%', margin: 'auto', border: '1px solid #ccc', padding: '10px' , backgroundColor: 'white'}}>
                  Resume Content
                </div>
              </>
            </div>
          );
        })}
        <div
          style={{
            top: `${resumes.length * 35 + 35}px`,
            left: '0%',
            height: '1600px',
            position: 'absolute',
            backgroundColor: '#242424', // Change color on hover
            border: '1px solid #ccc',
            borderColor: 'grey',
            width: '100%',
            zIndex: '9998',
            color: 'white',
            borderRadius: '10px',
            transform: 'rotate3d(1, 0, 0, -40deg)',
            paddingLeft: '100px',
            fontSize: '20px',
          }}
        >
          <br />
          <i>Secret files</i>
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;



/*
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const WorkSpace = () => {
  const [resumes, setResumes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [movedIndexes, setMovedIndexes] = useState(new Set()); // Set to track moved indexes

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('./src/assets/resume_file_details.csv'); // Ensure this path is correct
        if (!response.ok) throw new Error('Network response was not ok');
        
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            console.log('Parsed CSV Data:', results.data); // Log the parsed data
            
            // Filter valid resumes
            const validResumes = results.data.filter(resume => resume.Filename && resume['Date of Creation']);
            setResumes(validResumes);
            setLoading(false); // Set loading to false once data is fetched
          },
        });
      } catch (error) {
        setError(error.message); // Set error message
        setLoading(false); // Set loading to false on error
      }
    };

    fetchCSV();
  }, []);

  const handleClick = (index) => {
    setMovedIndexes(prev => {
      const newIndexes = new Set(prev);
      if (newIndexes.has(index)) {
        newIndexes.delete(index); // If already moved, remove it
      } else {
        newIndexes.add(index); // If not moved, add it
      }
      return newIndexes;
    });
  };

  if (loading) return <p>Loading resumes...</p>; // Loading feedback
  if (error) return <p>Error loading resumes: {error}</p>; // Error feedback

  return (
    <div
      style={{
        width: '100%',
        height: '1000px',
        margin: 'auto',
        padding: '100px',
        position: 'relative',
        overflow: 'hidden',
        top: '0px',
        backgroundColor:'black'
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          perspective: '2000px',
          
        }}
      >

        



        {resumes.map((resume, index) => {
          const isMoved = movedIndexes.has(index); // Check if this resume is moved
          return (
            <div
              key={index}
              style={{
                left:'15%',
                border: '1px solid #ccc',
                padding: '10px',
                width: '70%',
                height: '40em',
                borderRadius: '10px',
                position: 'absolute',
                top: ${index * 35 + (isMoved ? -100 : 0)}px, // Adjust position based on moved state
                zIndex: resumes.length + index,
                backgroundColor: hoveredIndex === index ? 'white' : '#242424', // Change color on hover
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                transform: 'rotate3d(1, 0, 0, -40deg)',
                transition: 'background-color 0.3s, top 0.3s', // Smooth transition
                color: 'grey',
              }}
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
              onClick={() => handleClick(index)} // Handle click to move up/down
            >
              <>
                <strong>{resume.Filename || 'No Filename'}</strong>
                <i>- Date of Creation: {resume['Date of Creation'] || 'No Date'}</i>
                <div style={{ width: '100%', height: '90%', margin: 'auto', border: '1px solid #ccc', padding: '10px' }}>
                  Resume Content
                </div>
              </>
            </div>
          );
        })}
        <div
      style={{
        top: ${resumes.length * 35+35 }px,
        left:"0%",
        height: "600px",
        position:'absolute',
        backgroundColor:'#242424', // Change color on hover
        border: '1px solid #ccc',
        borderColor:'grey',
        width:'100%',
        zIndex:'9999',
        color:'white',
        borderRadius: '10px',
        transform: 'rotate3d(1, 0, 0, -40deg)',
        paddingLeft: '100px',
        fontSize:'20px'
      }}
      >
        <br></br>

        <i>Secret files</i>
      </div>
      </div>
      
    </div>
  );
};

export default WorkSpace;
*/