import './Background.css'
import ''
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='backgrounnd' autoPlay loop muted >
                <source src={video1} type='videao/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return<img className='backgrounnd' src={image1} alt="" />
    }
    else if (heroCount === 1) {
        return <img className='backgrounnd' src={image2} alt="" />
    }
    else if (heroCount === 2) {
        return <img className='backgrounnd' src={image3} alt="" />
    }

}

export default Background
