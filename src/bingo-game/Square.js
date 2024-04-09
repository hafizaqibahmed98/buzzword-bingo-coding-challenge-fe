import React from "react";
import {Button} from "@mui/material";

class Square extends React.Component {
    render() {
        return (
            <Button
                className="square"
                onClick={() => this.props.onClick()}
                variant={this.props.value ? "contained":"outlined"}
            >
                "word"
            </Button>
        );
    }
}

export default Square;




