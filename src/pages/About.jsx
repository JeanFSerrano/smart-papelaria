import about from '/img/about.jpg'

const About = () => {
  return (
    <section>
      <h2 id='sobre' className='mt-10 text-center text-3xl font-bold mb-8 xs:mb-4'>Sobre nós</h2>
      <div className='xl:w-2/3 m-auto flex justify-around items-center p-4 xs:w-full'>
        <p className='xl:text-left mt-4 w-96 mr-16 xs:mr-0 text-center'>
          A Smart Papelaria é uma empresa que busca mudar a maneira de se pensar no conceito de papelaria.
          A Smart Papelaria é uma empresa que busca mudar a maneira de se pensar no conceito de papelaria.
          A Smart Papelaria é uma empresa que busca mudar a maneira de se pensar no conceito de papelaria.
          A Smart Papelaria é uma empresa que busca mudar a maneira de se pensar no conceito de papelaria.
        </p>
        <figure className='xs:hidden sm:block md:block lg:block xl:block'>
          <img src={about} width='330' alt="Canetas, post-its" />
        </figure>
      </div>
    </section>
  )
}

export default About