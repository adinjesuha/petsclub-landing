import React from "react"

const Newsletter = ({ pageContext }) => {
  let { subscriberCount } = pageContext

  console.log(subscriberCount)

}

export default Newsletter