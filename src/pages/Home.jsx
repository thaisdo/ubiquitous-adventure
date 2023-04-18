import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
    const [contador, setContador]= useState(0);
    const [campo, setCampo]= useState("");

    function handleClick(event) {
        setContador(contador + 1);
        console.log(event.target);
    }
    function handleChange(event) {
        setCampo(event.target.value);
        console.log(campo)
    }
    function handleKeyDown(event) {
        console.log(event.key);
    }
    function handleFocus(event) {
        console.log(`ganhou o foco ${event.target}`);
    }
    function handleBlur(event) {
        const valor = event.target.value
        if (valor === null || valor === "") {
            console.log("campo obrigatório")
        }
        //console.log(`perdeu o foco ${event.target}`);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target)
    }
    return <>
        <Header title="My website" menus={["Home", "About", "Exit"]} />
        <Main>
            <h2>Home page</h2>
            <h6>{contador}</h6>
            <button onClick = {handleClick}>Clicar</button>
            <div onClick = {handleClick}>Tocar</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Texto" onChange={handleChange} onKeyDown={handleKeyDown}/>
                <input type="email" placeholder="Email" onFocus={handleFocus} onBlur={handleBlur}/>
                <input type="submit" value="Enviar"/> 
            </form>        
        </Main>
    </>
}