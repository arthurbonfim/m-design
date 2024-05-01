import './style.css';

const Footer = () => {
    return(
        <footer className='footer sec'>
            <div className='container-500'>
                <img className='footer__logo-img' src={process.env.PUBLIC_URL +
                '/assets/logo.png'} alt='logo'/>
                <div className='footer__txt'>
                    <p>Ajudamos a criar uma personalidade digital construindo 
                    sua marca no ambiente online utilizando estratégias, 
                    ferramentas e tecnoligias personalizadas.</p>
                </div>
                <nav className='footer__links'>
                    <a href='#'><img src={process.env.PUBLIC_URL +
                    '/assets/facebook.png'} alt='facebooktwitter'/></a>
                    <a href='#'><img src={process.env.PUBLIC_URL +
                    '/assets/twitter.png'} alt='twitter'/></a>
                    <a href='#'><img src={process.env.PUBLIC_URL +
                    '/assets/linkedin.png'} alt='linkedin'/></a>
                    <a href='#'><img src={process.env.PUBLIC_URL + 
                    '/assets/google-plus.png'} alt='google-plus'/></a>
                    <a href='#'><img src={process.env.PUBLIC_URL +
                    '/assets/dribble.png'} alt='dribble'/></a>
                    <a href='#'><img src={process.env.PUBLIC_URL + 
                    '/assets/behance.png'} alt='behance'/></a>
                </nav>
                <p>Copyright 2024 © <a className='emphasis' href='https://github.com/arthurbonfim' target='_blank'>
                Arthur Bonfim</a></p>
            </div>
           
        </footer>
    )
}

export default Footer;