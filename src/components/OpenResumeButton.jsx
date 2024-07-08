import React from 'react';

const OpenResumeButton = () => {
  const openResume = () => {
    window.open('/JohnOBrienResume.pdf', '_blank');
  };

  return (
    <button 
      onClick={openResume} 
      className="text-white px-4 py-2 rounded border w-24"
    >
       Resume
    </button>
  );
};

export default OpenResumeButton;
