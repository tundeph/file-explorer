import React from "react"

export interface Props {
  children: React.ReactNode
}
const Notification = ({ children }: Props) => {
  return <div> {children}</div>
}

export default Notification
