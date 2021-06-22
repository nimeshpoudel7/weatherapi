import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
        <div className="container">
        
          <h4><b>{props.name}</b></h4>
          {/* <div>
          <input type='text' value={props.name} onChange={props.onChangeName}/>
          </div> */}
          <p>City:{props.city}</p> 
          <p>Temperature: {props.tep}</p>
         
          {/* <button className='button button-red'onClick={props.ondelete}>Delete</button> */}
          <div>{props.children}</div>
        </div>
      </div>
    )
}

export default Card
