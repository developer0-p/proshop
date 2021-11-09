import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" keyword={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to ProShop',
  description: 'We shell the best products for cheap',
  keyword: 'electronics, buy electronics, cheap electronics',
}

export default Meta
