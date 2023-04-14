export default function Navbar(props) {
    return <ul>
        {props.itens.map((item) => <li key={item}>{item}</li>)}
    </ul>
}