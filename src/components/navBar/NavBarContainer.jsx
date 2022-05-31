import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state) => {
    return {
        navBar: state.navBar,
    }
}

const NavBarContainer = connect (mapStateToProps) (NavBar);
export default NavBarContainer;