// Module Dependencies
import React, { Component } from "react";

// Module main Component
class ItemSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view
    };
    // create a ref to store the textInput DOM element
    this.dataLabels = React.createRef();
  }

  componentDidMount() {
    const move = this.dataLabels.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    move.addEventListener("mousedown", e => {
      isDown = true;
      move.classList.add("activesa");
      startX = e.pageX - move.offsetLeft;
      scrollLeft = move.scrollLeft;
    });

    move.addEventListener("mouseup", () => {
      isDown = false;
      move.classList.remove("activesa");
    });

    move.addEventListener("mousemove", e => {
      if (!isDown) return;
      console.log(isDown);
      const x = e.pageX - move.offsetLeft;
      const walk = (x - startX) * 0.5;
      move.scrollLeft = scrollLeft - walk;
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.view !== prevState.view) {
      return {
        view: nextProps.view
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  _movescrollleft = e => {
    e.preventDefault();
    const labels = this.dataLabels.current;
    labels.scrollBy(-100, 0);
  };

  _movescrollRight = e => {
    e.preventDefault();
    const labels = this.dataLabels.current;
    labels.scrollBy(100, 0);
  };

  render() {
    const { view } = this.state;
    return (
      <div className={`itemslider ${view ? "viewItems" : null}  `}>
        <div className="btnpre">
          <button
            className="btn btn-scrolling"
            onClick={e => this._movescrollleft(e)}
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>
        </div>
        <div className="content-itemslider">
          <div className="typefields" ref={this.dataLabels}>
            {this.props.children}
          </div>
        </div>
        <div className="btnpre btnpre2">
          <button
            className="btn btn-scrolling"
            onClick={e => this._movescrollRight(e)}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ItemSlider;
