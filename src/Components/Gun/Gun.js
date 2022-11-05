import React from "react";

const Gun = (props) => {
  const { action, bullet, capacity, category, img, name, price } = props.gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => props.countIncrease()}
              className="btn btn-sm btn-secondary mr-3"
            >
              Add to Cart
            </button>
            <button className="btn btn-sm btn-success">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
