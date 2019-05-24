import React, { Component } from 'react';
import '../styles/cartotalscore.css'


export default class CarTotalScore extends Component {
    render(){
      let { Year, Make, Model } = this.props;
      return (
        <section className="car-total-score">
          <div className="card">
            <div className="full-name">{Year} {Make} {Model}</div>
            <div className="total-score">{this.props['Total Score']} </div>
          </div>
        </section>
      )
    }
}
