import React, { Component } from 'react';
import MyCarousel from '../components/carousel';
import MyHero from '../components/hero';
import MyButtons from '../components/buttons';

class Barajear extends Component {
    
    state = {};

    componentDidMount = () =>{
        this.setState({numbers:[],cardNumber:[],buttonStyle:{display:"inline-block"}});
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
        
    }
    resetModule = () =>{
        this.setState({numbers:[]});
        this.setState({buttonStyle:{display:"inline-block"}});
        this.setState({cardNumber:""});
    }
    render() { 
        if(this.state.numbers){
        return (
            <div>
                <MyButtons buttonStyle={this.state.buttonStyle} resetModule={this.resetModule} getRandomNumber={this.useAnotherCard}/>
                <MyHero card={this.state.cardNumber} />
                <MyCarousel cards={this.state.numbers} />
                
            </div>
        );
        } return(<h1>Error</h1>)

    }
}
 
export default Barajear;