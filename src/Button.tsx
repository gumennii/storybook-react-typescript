import React, { FC } from 'react'

export interface Props {
  /**
   * Background color
   * @default primary
   */
  background?: string
  /** Click handler */
  onClick?: () => void
}

const Button: FC<Props> = ({ children, background, ...props }) => {
  return (
    <button {...props} style={{ background }}>{children}</button>
  )
}

export default Button;