import dtalks from '../assets/dtalks.png'
import kisahnesia from '../assets/kisahnesia.png'
import sportinspireid from '../assets/sportinspireid.png'

const Projects = () => {
    const listProject = [
        {
            id: 1,
            name: 'D-Talks',
            desc: 'a website that provides various design courses suitable for beginners.',
            image: dtalks,
            link: 'https://detalks.netlify.app/'
        },
        {
            id: 2,
            name: 'Kisahnesia',
            desc: 'a website that provides various storybooks for children.',
            image: kisahnesia,
            link: 'https://kisahnesia.vercel.app/'
        },
        {
            id: 3,
            name: 'Sport Inspire ID',
            desc: 'a website that provides various information about sports in Indonesia.',
            image: sportinspireid,
            link: 'https://sport-inspire-id.netlify.app/'
        },

    ]

  return (
    <section id="project" className="py-20">
        <div className="container">
            <div>
                <h3 className="uppercase">Projects</h3>
                <h2>Projects That Enhance My Experience.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-6 gap-4">
                {listProject.map((items) => (
                    <div key={items.id} className="bg-white rounded-xl border border-gray-100 shadow">
                        <a href={items.link} target='_blank'>
                            <img className="rounded-t-xl" src={items.image} alt={items.name} />
                        </a>
                        <div className="p-4">
                            <a href={items.link} target='_blank'>
                                <h1 className="text-base">{items.name}</h1>
                            </a>
                            <p className="text-gray-400 text-sm mt-2">{items.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects