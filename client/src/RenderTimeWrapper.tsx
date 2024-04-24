import React, { Component } from 'react';

// Higher-order component to measure rendering time
class RenderTimeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTime: 0,
    };
  }

  componentDidMount() {
    this.measureRenderTime();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.measureRenderTime();
    }
  }

  measureRenderTime() {
    // Start measuring rendering time
    const startTime = performance.now();

    // Force component to update (if needed)
    this.forceUpdate();

    // End measuring rendering time after update
    const endTime = performance.now();

    // Calculate rendering time
    const renderTime = endTime - startTime;

    // Update state with rendering time
    this.setState({ renderTime });
  }

  render() {
    const { children } = this.props;
    const { renderTime } = this.state;

    // Recursively clone children with added renderTime prop
    const childrenWithRenderTime = React.Children.map(children, (child) => {
      return React.cloneElement(child, { renderTime });
    });

    return childrenWithRenderTime;
  }
}

export default RenderTimeWrapper;
