
// import react from "react";
import classes from '../App.module.css';
import alogo from '../assets/img/Amazon logo.png'

const TopHeader = (props) => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src={alogo} alt="Amazon logo" />
            </nav>
        </header>
    );

}

export default TopHeader;