import websiteImg1 from '../assets/hg.jpg';
import websiteImg2 from '../assets/ipl.jpg';
import websiteImg3 from '../assets/sum.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Hand gesture recognition using OpenCV and Mediapipe',
                link: 'https://github.com/eshwar9820/Hand-gesture-recognition'
            },
            {
                image: websiteImg2,
                description: 'IPL First Innings Score prediction using ML Algorithms',
                link: 'https://github.com/eshwar9820/IPL_First-Innings-score-Prediction'
            },
            {
                image: websiteImg3,
                description: 'Wikipedia Movieplot Summarization using T5 Transformer',
                link: 'https://github.com/eshwar9820/Wikipedia-Movie-Plot-Summarization-T5'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>A showcase of some of my most impactful and innovative work.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[450px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}