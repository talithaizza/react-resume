import React from 'react'
import {Switch,Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        foo: 'bar',
        resumeData: {}
        };

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);

    }

    getResumeData(){
        $.ajax({
        url:'/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
            this.setState({resumeData: data});
        }.bind(this),
        error: function(xhr, status, err){
            console.log(err);
            alert(err);
        }
        });
    }

    componentDidMount(){
        this.getResumeData();
    }
    render(){

        return(
            <Switch>
                <Route exact path="/" component={() => <Home data={this.state.resumeData.main}/>} />
                <Route path="/about" component={() => <About data={this.state.resumeData.main}/>} />
                <Route path="/resume" component={() => <Resume data={this.state.resumeData.resume}/>} />
                <Route path="/portfolio" component={() => <Portfolio data={this.state.resumeData.portfolio}/>} />
                <Route path="/contact" component={() => <Contact data={this.state.resumeData.main}/>} />
            </Switch>
        )
    }
}

export default Main;