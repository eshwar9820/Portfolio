import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook} from "react-icons/ai";
export default function Hero(){
    return <section className='flex flex-col px-5 py-32 bg-primary justify-center md:flex-row'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font-hero-font'>Hi, <br/>I'm <span className='text-black'>Eshwar</span>
            <p className='text-2xl'>MTech in Data analytics at NIT Trichy</p>
            </h1>
            <div className='flex py-5'>
                <a href="https://x.com/Eshwar21178467" className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href="https://www.linkedin.com/in/eshwar-s-794a62182/" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href="https://www.facebook.com/eshwar.sivakumar.10" className=' hover:text-white'><AiOutlineFacebook size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}