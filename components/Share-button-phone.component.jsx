import React from 'react'
import OrangeBgButton from './orange-bg-button';

const ShareButtonPhoneComponent = ({additionalClasses, handleShare}) => {
    
  return (
    <div>
      {/* This is the button that will be clicked to share the message */}
      <div className={`${additionalClasses}`} onClick={handleShare}>
        <OrangeBgButton additionalClasses="rounded font-semibold">
          Share
        </OrangeBgButton>
      </div>
    </div>
  )
}

export default ShareButtonPhoneComponent;