import React from 'react'

const Photo = ({urls:{regular}, likes, user:{name, portfolio_url, profile_image:{medium}}}) => {
  return <article className={'photo'}>
    <img src={regular} alt="img"/>
    <div className="photo-info">
      <div>
        <h4>{name}</h4>
        <p>{likes} likes</p>
      </div>
      <a href={portfolio_url}><img className={'user-img'} src={medium} alt="img"/></a>
    </div>
  </article>
}

export default Photo
