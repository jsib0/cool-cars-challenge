import React, { Component } from 'react';
import CarTotalScore from './CarTotalScore';
import $ from 'jquery';
import '../styles/dashboard.css';



export default class Dashboard extends Component {

    constructor(props){
      super(props);
      this.state={
        cars: [],
      }
    }

    fetchCars(){
      $.getJSON('https://api.myjson.com/bins/jj5ng', cars => {

        this.setState(
          {
            cars: cars,
          }
        )
      });
    }

    componentDidMount(){
      this.fetchCars();
    }

    generateCarBlocks() {
      let preSortedCars = []
      this.state.cars.map((car, index) => {
        if ( car['Cool Factor'] >= 7) {
          preSortedCars.push(car);
        }
        return preSortedCars
      })

     let sortedCars = preSortedCars.sort(function(a, b) {
        return (b['Total Score'] > a['Total Score']) ? 1 : ((b['Total Score'] < a['Total Score']) ? -1 : 0);
     })

      return sortedCars.map((c, i) => {
        return <CarTotalScore key={i} {...c}/>
      })

    }


    render() {
      return(
        <main className="dashboard">
          <section className="card-list">
            { this.generateCarBlocks() }
          </section>
        </main>
      )
    }


}
