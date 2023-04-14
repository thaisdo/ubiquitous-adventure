import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
    return <>
        <Header title="My website" menus={["Home", "About", "Exit"]} />
        <Main><h2>Home page</h2></Main>
    </>
}