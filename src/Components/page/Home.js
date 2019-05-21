import React, { Component } from 'react';

class Home extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var profilepic= "images/"+this.props.data.image;
      // var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <div className="row banner">
         <div clasnpm sName="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3> <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Home;
