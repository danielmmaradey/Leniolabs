// Module Dependencies
import React from "react";

// Module main Component
const HeadContent = props => {
  // Action Reply
  const actionReply = e => {
    if (props.actionReply !== undefined) {
      e.preventDefault();
      props.actionReply();
    }
  };

  // Action Reply
  const actionFilter = e => {
    if (props.actionFilter !== undefined) {
      e.preventDefault();
      props.actionFilter();
    }
  };

  // Component button Reply
  const reply = () => {
    return (
      <button
        className="dv-icon-head dv-icon-reply"
        onClick={e => actionReply(e)}
      >
        <i className="fa fa-reply" aria-hidden="true"></i>
      </button>
    );
  };

  // Component button Filter
  const filter = () => {
    return (
      <button
        className="dv-icon-head dv-icon-filter"
        onClick={e => actionFilter(e)}
      >
        <i className="fa fa-filter" aria-hidden="true"></i>
      </button>
    );
  };

  return (
    <div id="headcontent">
      <div className="container">
        <div className="dv-flex">
          <div className="dv-ml-1">
            {props.reply ? reply() : null}
            <span className="dv-icon-head">
              <i className={` fa ${props.icon} `} aria-hidden="true"></i>
            </span>
            <div className="dv-info-head">
              <h2>{props.title}</h2>
              <p>{props.info}</p>
            </div>
          </div>
          <div className="dv-ml-2">
            {props.children}
            {props.filter ? filter() : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
