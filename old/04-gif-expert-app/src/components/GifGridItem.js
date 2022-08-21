import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({title,url}) => {
  
    //console.log(id,title,url);

    return (
    <div className="card animate__animated animate__fadeIn"> 
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired    
}

/*
    1. Enzyme
    2. Enzime to Json
    3. Debe de mostrar el componente correctamente
        *shallow
        *wrapper .toMatchSnapshot()
*/