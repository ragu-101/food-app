import React from 'react'

const Button = ({children,textOnly,Classname,...props}) => {
  let classes = textOnly ? 'text-button' : 'button';
  classes += " " + Classname; // gap for adding classes
  return (
    <button className={classes} {...props}>{children}</button> // {...props} passing other props
  )
}

export default Button