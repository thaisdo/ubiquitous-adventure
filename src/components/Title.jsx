function Title(props) {
    //return <h1>Olá mundo da primeira vez</h1>
    //if (props.text){
    //    return <h1>{props.text}</h1>;
    //} else {
    //    return <h1>dont have text</h1>
    //}

    // com ? :
    //return <h1>
    //    {props.text ? props.text: "nao tem entao exibe isso (operador ternario)"}
    //</h1>

    // com &&
    return (
        props.text && <h1>{props.text}</h1>
        )
}

export default Title