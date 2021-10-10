
// import react from "react";
import classes from '../App.module.css';

const ProductData = (props) => {
    let colorOptions = [];
    let featuresList = [];

    if (props && props.data && props.data.colorOptions) {
        colorOptions = props.data.colorOptions.map((items, pos) => {
            let classArray = [classes.ProductImages]
            if (pos === props.currentPreviewImgPOS) {
                classArray.push(classes.SelectedImageBorder)
            }
            return (
                <img key={pos} className={classArray.join(' ')} src={items.imageUrl} alt={items.styleName} onClick={() => props.onColorOptionClick(pos)} />
            )
        })
    }

    if (props && props.data && props.data.featureList) {
        featuresList = props.data.featureList.map((items, pos) => {

            let classArray = [classes.FeaturesItems];
            if (pos === 1 && props.isHeartBeartShow) {
                classArray.push(classes.SelectedFeaturesItem)
            } else if (pos === 0 && !props.isHeartBeartShow) {
                classArray.push(classes.SelectedFeaturesItem)
            }

            return (
                <button onClick={() => props.onFeaturesItemClick(pos)} key={pos} className={classArray.join(' ')}>{items}</button>
            )


        })
    }


    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}> {props.data.title}</h1>
            <p className={classes.ProductDesc}> {props.data.description} </p>
            <h3 className={classes.SelectionHeader} > Select Color </h3>
            <div >{colorOptions}</div>
            <h3 className={classes.SelectionHeader} > Features </h3>
            <div>{featuresList}</div>
            <button className={classes.PrimaryBtn}>Buy Now</button>
        </div>
    );

}

export default ProductData;