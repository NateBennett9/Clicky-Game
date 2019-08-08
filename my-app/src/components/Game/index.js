import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Game;
