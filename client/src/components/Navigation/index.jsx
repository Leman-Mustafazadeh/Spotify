import React from 'react';

const Navigation = () => {
   const goBack = () => {
      window.history.back(); 
   };

   const goForward = () => {
      window.history.forward(); 
   };

   return (
      <div style={{display:'flex',gap:'40px'}}>
         <div onClick={goBack} style={{cursor:'pointer'}}>
            <i className="fa-solid fa-chevron-left" style={{color:'white'}}></i>
         </div>
         <div onClick={goForward} style={{cursor:'pointer'}}>
            <i className="fa-solid fa-chevron-right" style={{color:'white'}}></i>
         </div>
      </div>
   );
}

export default Navigation;
