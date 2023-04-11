function Nav(props){
    return (
        <ul>
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
    
}

export default Nav;