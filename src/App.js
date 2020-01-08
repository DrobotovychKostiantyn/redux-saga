import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {ageDown, ageUp, requestPlaceholder} from "./store/actions";

class App extends Component {
  render() {
    const {onAgeUp, onAgeDown, requestPlaceholder,data, age} = this.props;
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{age}</span>
        </div>
        <div>
          <button onClick={onAgeUp}>Age UP</button>
          <button onClick={onAgeDown}>Age Down</button>
          <button onClick={requestPlaceholder}>Make request</button>
        </div>
        <ul>
          {data.map(el => (
            <li>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  age: state.age,
  data: state.data,
});

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: (data) => dispatch(ageUp(data)),
    onAgeDown: (data) => dispatch(ageDown(data)),
    requestPlaceholder: () => dispatch(requestPlaceholder()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
