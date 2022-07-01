import React from 'react';
import './NavBar.css';
import ParticlesBg from 'particles-bg';

interface IProps{
    resumeCaption: string;
    githubCaption: string;
    aboutMeCaption: string;
    projectsCaption: string;
}

class NavBar extends React.Component<IProps>{

    public static defaultProps = {
        resumeCaption: "View Resume",
        githubCaption: "github page",
        aboutMeCaption: "About Me",
        projectsCaption: "Projects"
    }


    public render(){
        return(
            <div className="navbar-wrapper navbar-visible">
            <div className="navbar-container">
                <div className="navbar-buttons-container">
                    <button className="About" onClick={this.handleAboutMeButton}>{this.props.aboutMeCaption}</button>
                    <button className="Experience" onClick={this.handleGithubButtonClick}>{this.props.githubCaption}</button>
                    <button className="Projects" onClick={this.handleProjectsButton}>{this.props.projectsCaption}</button>
                    <button className="Resume" onClick={this.handleResumeButtonClick}>{this.props.resumeCaption}</button>
                </div>
                
            </div>
            <ParticlesBg type="cobweb" bg={true}/>
        </div>

        );
    }


private handleResumeButtonClick(){
    console.log("Scroll page down to Resume section")
}

private handleGithubButtonClick(){
    console.log("load github page")
}

private handleAboutMeButton(){
    console.log("Scroll to About me section")
}

private handleProjectsButton(){
    console.log("Load Leviathan Application")
}


}

export default NavBar;