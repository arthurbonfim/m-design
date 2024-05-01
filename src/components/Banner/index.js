import './style.css';

const Banner = () => (
    <section className='banner sec'>
        <div className='banner__img'>
            <img src={process.env.PUBLIC_URL +'/assets/banner.png'} alt=
            'banner'/>
        </div>
        <div className='banner__heading'>
            <p>BRANDING / UI / UX / TECNOLOGIA</p>
            <h1>Agência de Brandig<br></br><b>e design digital</b></h1>
        </div>
    </section>
)

export default Banner;