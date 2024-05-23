import React from 'react'

const IconBtn = ({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
      } cursor-pointer gap-x-1 rounded-md md:py-2 md:px-5  font-semibold text-xs sm:text-md py-1 px-2   text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}

export default IconBtn