import hero from '../assets/pexels-dima-valkov-1186343-3864682.jpg'

const Hero = () => {
    return(
        <div>
            <img src={hero} className='w-full max-h-[600px] object-cover'/>
        </div>
    )
};

export default Hero