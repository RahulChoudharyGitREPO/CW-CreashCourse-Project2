
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import firstCard from './firstCard1.webp'
import secondCard from './secondCard.webp'
import ThirdCard from './ThirdCard.webp'
import FourthCard from './FourthCard.webp'
import fifthCArd from './FifthCArd.webp'
import sixthcard from './sixthcard.webp'


function Slider() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}	>
            <div>
                <img src={firstCard} alt="Slide 1" />

            </div>
            <div>
                <img src={secondCard} alt="Slide 2" />
            </div>
            <div>
                <img src={ThirdCard} alt="Slide 1" />
            </div>
            <div>
                <img src={FourthCard} alt="Slide 1" />
            </div><div>
                <img src={fifthCArd} alt="Slide 1" />
            </div><div>
                <img src={sixthcard} alt="Slide 1" />
            </div>
        </Carousel>
    )
}

export default Slider






