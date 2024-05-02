import './style.css';

const Top = (props) => {    
    const toDark = () => (
        <div className='btn-sun btn'>
            {/*specifies a function with props to be performed when clicking 
            the dark button*/}
            <i class="btn-sun__drk material-symbols-outlined" onClick=
            {props.btnOnClick}>dark_mode</i>
            <i class="btn-sun__lgt material-symbols-outlined">light_mode</i>        
        </div>
    )
    
    const toLight = () => (
        <div className='btn-moon btn'>
            {/*specifies a function with props to be performed when clicking 
            the light button*/}
            <i class="btn-moon__lgt material-symbols-outlined" onClick=
            {props.btnOnClick}>light_mode</i>  
            <i class="btn-moon__drk material-symbols-outlined">dark_mode</i>  
        </div>
    );

    return(
        <header className='top-bar sec'>
            <img className="top-bar__logo" src={process.env.PUBLIC_URL +
            '/assets/logo.png'} alt="logo"/>
            {/*Change the buttons depending on the value of props.pageTheme*/}
            {props.pageTheme ? toDark() : toLight()}
        </header>
    )
}

export default Top;