import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return( //return only one element
        <div className='tc bg-light-green w5 dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='newrobo' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;