import React from 'react';
import "./WelcomePage.css";
import ParticlesBg from 'particles-bg';


interface IProps{
    title: string;
    content: string;
}

class WelcomePage extends React.Component<IProps>{

    public render(){
        return(<div className="welcome-wrapper">
            <div className="welcome-container">
            <div className="navbar-title-container">
                    <span>{this.props.title}</span>
                </div>
                <div className="navbar-content-container">
                    <p>{this.props.content}</p>
                </div>
            <ParticlesBg type="lines" bg={true}/>
            </div>
        </div>
        
        );
    }



}

export default WelcomePage;