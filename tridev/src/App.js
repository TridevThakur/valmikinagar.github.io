import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './assets/logo.svg';
import './t.scss';

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="App">
         <div class="w3-bar w3-black">
         <img src="newpic.png"  class="w3-bar-item w3-button w3-mobile" />
       <div className="ti">
       <a href="#" class="w3-bar-item w3-button w3-mobile">Home</a>
       <a href="#" class="w3-bar-item w3-button w3-mobile">About</a>
       <a href="#" class="w3-bar-item w3-button w3-mobile">Services</a>
       <a href="#" class="w3-bar-item w3-button w3-mobile">Contacts</a>
       <div className="mi">
       <p><center className="bi">Kashmir of Bihar:Valmikinagar</center></p>
       </div>
       </div>
       </div>
      <div className="mk">

<button
                onClick={() => this.prevProperty()}
                disabled={property.index === 0}
            >Prev</button>
                

                <button 
      onClick={() => this.nextProperty()} 
      disabled={property.index === data.properties.length-1}
    >Next</button>
    </div>

              <div className="page">
          
            <section>

                    <marquee><h1>Beautiful places of Valmiki-nagar</h1></marquee>
                
            </section>

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
                
              </div>
            </div>
            
   
        </div>
        
       
      </div>
      
      
      
       
    );
   
  }
}

export default App;
