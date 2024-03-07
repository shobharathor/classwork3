import './Hero.css'
import GigButton from './GigButton'

function Hero() {
    return(
        <div id='hero'>
            <div>
                <h1><span>Let us Find your</span><span>Forever Food</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

        <div>
                <GigButton padding = "0.500rem 2rem" borderRadius="10px" backgroundColor= "#aa1d1d" color="#ffffff">Search Now</GigButton>
                <GigButton padding = "0.500rem 2rem" borderRadius="10px" backgroundColor= "#ffffff" color="#aa1d1d">Know More</GigButton>
            </div>
            
        </div>

    </div>
    )
};

export default Hero;