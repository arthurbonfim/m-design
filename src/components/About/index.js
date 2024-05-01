import Card from '../Card';
import './style.css';

const About = () => {
    return(
        <main className='about alt-sec'>
            <div className='container-1024'>
                <div className='about__txt container-700'>
                    <h2>Experiências De Trabalho</h2>
                    <p>Há mais de 10 anos no mercado de Branding, Design 
                    Gráfico, Criação de Sites e Marketing Digital, nos 
                    empenhamos diariamente para entregar resultados que tragam 
                    impacto positio aos nossos clientes.</p>
                </div>
                <div className='cards-sec'>
                    <Card
                    date='JUNHO 2012 - 2016'
                    title='Web Designer'
                    company='Pied Piper Startup.'
                    description='Criação de landing pages, sites 
                    intstitucionais e E-comerces completamente personalizados 
                    e otimizados para buscadores'/>
                    <Card
                    date='AGOSTO 2016 - 2019'
                    title='Product Designer'
                    company='E Corp.'
                    description='Criação de modelos estratégicos de cconversão
                    identificando o cliente e mapeando toda a sua jornada de
                    compra'/>
                    <Card
                    date='FEVEREIRO 2019 - 2021'
                    title='Digital Consulting'
                    company='Araska Inc.'
                    description='Consultoria em estratégias digitais para todas
                    as etapas do ciclo do projeto, desde a definição inicial 
                    até a execução.'/>
                </div>
            </div>        
        </main>
    )
}

export default About;