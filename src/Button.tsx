import React, { FC } from 'react'

export interface Props {}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button;