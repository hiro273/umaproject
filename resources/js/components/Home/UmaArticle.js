import React from 'react'
import UmaDatas from '../UmaData/UmaData'

const UmaArticle = () => {
  UmaDatas.forEach((value) => {
    value.href = '/uma' + String(value.img).replace(/\/img/g, '').replace(/.png/g, '')
  })
  

  return (
    <ul id="ul-flex">
      {UmaDatas.map((uma,index) => (
        <li key={index} className="inner">
          <a href={uma.href}><img src={uma.img} id="sizing" width="100" height="100" /><p className="p-inner">{uma.name}</p></a>
        </li>
      ))}
    </ul>
  )
}

export default UmaArticle
