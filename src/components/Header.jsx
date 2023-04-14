import Title from "./Title";
import Navbar from "./Navbar";

export default function Header(props) {
    return <header>
        <Title text={props.title} />
        <Navbar itens={props.menus} />
    </header>
}