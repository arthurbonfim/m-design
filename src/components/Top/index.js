import './style.css';

const Top = (props) => {
    //dark and light buttons
    const lightBtn = <button className='btn btn--light' ><img src=
    {process.env.PUBLIC_URL +'/assets/sun.png'} alt='light-mode'/></button>;
    const darkBtn = <button className='btn btn--dark' ><img src=
    {process.env.PUBLIC_URL +'/assets/moon.png'} alt='dark-mode'/></button>;

    return(
        <header className='top-bar sec'>

            <img className="top-bar__logo" src={process.env.PUBLIC_URL +
            '/assets/logo.png'} alt="logo"/>

            {/*specifies a function with props to be performed when clicking 
            the button*/}
            <div onClick={props.btnOnClick} className='top-btn'>

                {/*Change the buttons depending on the value of 
                'props.pageTheme'*/}    
                {props.pageTheme ? darkBtn : lightBtn}
                
            </div>
        </header>
    )
}

export default Top;