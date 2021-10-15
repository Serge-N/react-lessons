import React from "react";
import ReactDOM from "react-dom";
import RandomList from "./RandomList";
import StepTracker from "./Stepbit";

class OneTimeButton extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.props.onClick();
        this.setState({ clicked: true });
    }

    render() {
        return (
            <button onClick={this.handleClick} disabled={this.state.clicked}>
                You can only click me once!
            </button>
        );
    }
}

// button component with hooks
function OneTimeButtonFunc({ onClick }) {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        onClick();
        //OK, no more clicking.
        setClicked(true);
    }

    return (
        <button onClick={handleClick} disabled={clicked}>
            You can still click me Once.
        </button>
    );
}

ReactDOM.render(
    <div>
        <OneTimeButton onClick={() => alert("hi")} />
        <br />
        <div style={{ margin: "1em" }}></div>
        <OneTimeButtonFunc onClick={() => alert("hi")} />
        <div style={{ margin: "1em" }}></div>
        <StepTracker number={10}/>
        <div style={{ margin: "1em" }}></div>
        <RandomList/>
    </div>
    , document.querySelector("#root")
);