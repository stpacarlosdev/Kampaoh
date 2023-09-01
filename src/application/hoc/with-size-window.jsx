import React, { Component } from "react";
const withSizeWindow = (WrappedComponent) =>
  class SizeWindow extends Component {
    constructor(props) {
      super(props);
      this.handleResize = this.handleResize.bind(this);
      this.detectMob = this.detectMob.bind(this);
      this.state = {
        size: "lg",
      };
    }
    componentDidMount() {
      window.addEventListener("resize", () => this.handleResize());
      this.handleResize();
    }

    handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const { size } = this.state;

      /* Vertical screens */
      if (width < height) {
        if (width >= 768 && size !== "sm_vertical") {
          this.setState({ size: "sm_vertical" });
        } else if (width < 768 && size !== "xs_vertical") {
          this.setState({ size: "xs_vertical" });
        }
        /* Horizontal screens */
      } else {
        if (width < 768 && this.detectMob()) {
          this.setState({ size: "xs_vertical" });
        } else if (width >= 2560 && size !== "ultrawide") {
          this.setState({ size: "ultrawide" });
        } else if (width < 2560 && width >= 1920 && size !== "full_horizontal") {
          this.setState({ size: "full_horizontal" });
        } else if (width < 1920 && width >= 1280 && size !== "lg_horizontal") {
          this.setState({ size: "lg_horizontal" });
        } else if (width < 1280 && size !== "md_horizontal") {
          this.setState({ size: "md_horizontal" });
        }
      }
    }

    detectMob() {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /* /iPad/i, */
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];

      return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
      });
    }

    render() {
      const { size } = this.state;
      return <WrappedComponent size={size} {...this.props} />;
    }
  };

export default withSizeWindow;
