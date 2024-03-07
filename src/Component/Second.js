import './Second.css'
// import Button from './GigButton'
import housewithgarden from '../assests/Images/house with garden.jpg'
import GigButton from './GigButton';

function Second(){
    return(
        <div id='second'>
            <div></div>
            <div id='second-div'></div>
            <div id='second-content'>
                <img src={housewithgarden} alt = "house with a garden"/>
                <div>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <GigButton padding = "0.600rem 1rem" borderRadius = "0.3rem" backgroundColor = "blue" color = "#ffffff" hoverBackgroundColor = "#ffffff" hoverColor = "blue">Get In Touch</GigButton>
                </div>
            </div>
        </div>
    )
};

export default Second;