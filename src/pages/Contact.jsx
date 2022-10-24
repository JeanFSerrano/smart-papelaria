import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (

        <section>
            <h2 id='contato' className='mt-10 text-center text-3xl font-bold'>Entre em contato</h2>
            <p className='text-center mt-4 mb-8'>Alguma dúvida? Deseja fazer um pedido? Nos contate pelos meios baixo abaixo:</p>

            <div className='flex justify-around xs:flex-col text-left md:flex-row'>
                <div className='xs:text-center md:text-left'>
                    <h3 className='font-bold mb-1'>Horário de funcionamento:</h3>
                    <p>Segunda a sexta de 06:40 às 18:00</p>
                    <p>Sábado de 08:00 às 14:00</p>
                    <h3 className='font-bold mb-1 mt-4'>Contato:</h3>
                    <p>Telefone: (27) 99272 8501</p>
                    <p>Endereço:</p>
                    <p>Rua Alagoas, 03, Industrial - Viana/ES</p>
                    <div className='mt-4'>
                        <h3 className='font-bold'>Mídias sociais:</h3>
                        <div className='xs:justify-center md:justify-start flex items-center gap-3 mt-2 text-red-500'>
                            <a target='_blank' href="https://www.instagram.com/smart_papelaria/">
                                <BsInstagram size={40} />
                            </a>
                            <a target='_blank' href="https://wa.me/5527992728501">
                                <BsWhatsapp size={40} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xs:text-center md:text-left mb-14'>
                    <h3 className='xs:mt-12 md:mt-0 font-bold mb-2'>Localização:</h3>
                    <iframe width="500" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Smart%20papelaria&t=&z=15&ie=UTF8&iwloc=&output=embed">
                    </iframe>

                </div>
            </div>
        </section>
    )
}

export default Contact