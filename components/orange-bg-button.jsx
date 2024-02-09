import React from 'react'

//additionalClasses is a prop that allows us to pass in additional classes to the button
//children is a prop that allows us to pass in the content of the button
const OrangeBgButton = ({children, additionalClasses}) => {
  return (
    <div className={`px-7 py-3 cursor-pointer bg-[#FF9606] text-white ${additionalClasses}`}>
        {children}
    </div>
  )
}

export default OrangeBgButton;