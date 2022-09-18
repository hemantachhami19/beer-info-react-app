import React from "react";

const Item = ({item}) => {

    const ingredients = item ? Object.keys(item.ingredients).join(','): ''
    return (
        <div className="custom-card one">
            <div className="img-holder">
                <img src={item.image_url} alt=""/>
                <span className="tooltiptext sand">ingredients: {ingredients}</span>
            </div>
            <div className="content">
                <h3 className="title">{item.name}</h3>
                <h6 className="sub title text-warning">{item.tagline}</h6>
                <div className="text-holder">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
};

export default Item
