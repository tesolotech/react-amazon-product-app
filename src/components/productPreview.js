// import react from "react";
import classes from '../App.module.css';

const ProductPreview = (props) => {
    const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
    return (
        <div className={classes.ProductPreview}>
            <img src={props.productPreviewImage} alt="Product Preview" />

            {
                props.IsHeartBeatShow ?
                    <div className={classes.HeartBeatSection} >
                        <i className="fas fa-heartbeat"></i>
                        <p > 70 </p>
                    </div>
                    :
                    <div className={classes.TimeSection} >
                        <p > {` ${currentHours} : ${currentMinutes} `} </p>
                    </div>

            }

        </div>
    )
}

export default ProductPreview;