import Navbar from './src/Navbar/Navbar'
import Categories from './src/Routes/Categories.jsx'
import Slider from './src/Slider/Slider.jsx'
import Ipl from './src/Ipl/Ipl'
import TopPicks from './src/Picks For You/TopPicks.jsx'
import Warranty from './src/Warranty,replacement/Warranty.jsx'
import LifyStyle from './src/LifeStyle/LifyStyle.jsx'
import BestOFBoat from './src/Best Of boAt/BestOFBoat.jsx'
import MultiActionAreaCard from './src/Blogs/Blog.jsx'
import Footer from './src/Footer/Footer.jsx'
function Home() {
    return (
        <>
            <Navbar />
            <Slider />
            {/* <Categories /> */}
            <Ipl />
            <TopPicks />
            <Warranty />
            <LifyStyle />
            <BestOFBoat />
            <MultiActionAreaCard />
            <Footer />
        </>

    )
}

export default Home
