
import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './components/productPreview';
import ProductData from './components/productData';
import ProductDataSet from './ProductData';
import TopHeader from './components/topBar';


class App extends Component {

  state = {
    productDatas: ProductDataSet,
    currentPreviewImgPOS: 0,
    isHeartBeartShow: false
  }

  onColorOptionClick = (index) => {
    this.setState({ currentPreviewImgPOS: index });
  }

  onFeaturesItemClick = (index) => {
    this.setState({ isHeartBeartShow: index === 0 ? false : true });
  }

  render() {
    return (
      <div className="App">
        <TopHeader />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview productPreviewImage={this.state.productDatas.colorOptions[this.state.currentPreviewImgPOS].imageUrl} IsHeartBeatShow={this.state.isHeartBeartShow} />
          </div>

          <div className={classes.ProductData}>
            <ProductData data={this.state.productDatas} onColorOptionClick={this.onColorOptionClick} currentPreviewImgPOS={this.state.currentPreviewImgPOS} onFeaturesItemClick={this.onFeaturesItemClick} isHeartBeartShow={this.state.isHeartBeartShow} />
          </div>
        </div>
      </div>
    );

  }


}

export default App;
