import '../styles/header.css'

function Header({name, img}){
    return (
        <header className="header">
            <h1>{name}</h1>
            <img src={img} alt="logo"/>
        </header>
    )
}

export default Header;