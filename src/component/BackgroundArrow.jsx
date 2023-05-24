import React, { useState } from 'react';
function BackgroundArrow({image, name}){
      const [isExpanded, setIsExpanded] = useState(false);
      const style ={"border-black","border-2"," w-full", }

      return (
        
                <div className={`container ${isExpanded ? 'expanded' : ''}`}
                style={{backgroundImage: `url(${image})` border-black border-2 w-full h-48 max-h-full bg-cover}}
                 onClick={() => setIsExpanded(!isExpanded)}>{name}</div>
      );

}
export default BackgroundArrow