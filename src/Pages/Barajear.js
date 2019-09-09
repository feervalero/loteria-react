import React, { Component } from 'react';
import MyCarousel from '../components/carousel';
import MyHero from '../components/hero';
import MyButtons from '../components/buttons';

class Barajear extends Component {
    
    state = {};

    componentDidMount = () =>{
        this.setState({numbers:[],cardNumber:[],buttonStyle:{display:"inline-block",background:"url(http://localhost:3000/button.png) no-repeat",backgroundSize:"100% auto",border:"none",lineHeight:"100%"}});
        this.setState({toggle:false});
    }

    useAnotherCard = () => {
        let randomNumber = (Math.floor(Math.random() * Math.floor(54)));
        
        if(this.state.numbers.indexOf(randomNumber) === -1 && this.state.numbers.length < 53){
            this.state.numbers.push(randomNumber);
            this.setState({cardNumber:randomNumber});
        }else{
            if(this.state.numbers.length===53){
                this.setState({buttonStyle:{display:"none"}});
                this.setState({cardNumber:""});
            }else{
                this.useAnotherCard();
            }
        }
        this.setState({toggle:!this.state.toggle});
        
    }
    resetModule = () =>{
        this.setState({numbers:[]});
        this.setState({buttonStyle:{display:"inline-block"}});
        this.setState({cardNumber:""});
    }
    render() { 
        if(this.state.numbers){
        return (
            <div className="container d-flex flex-column">
                <div>
                    <MyCarousel toggle={this.state.toggle} cards={this.state.numbers} card={this.state.cardNumber} />
                </div>
                <div className="flex-grow-1 p-2" style={{backgroundColor:"rgb(0%, 13.8%, 100%)"}}>
                    <MyHero cards={this.state.numbers} card={this.state.cardNumber} resetModule={this.resetModule}/>
                    <MyButtons buttonStyle={this.state.buttonStyle}  getRandomNumber={this.useAnotherCard}/>
                </div>
                <div>
                </div>
                
                
                
            </div>
        );
        } return(<h1>Error</h1>)

    }
}
 
export default Barajear;