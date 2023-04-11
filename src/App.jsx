import Title from "./components/Title"
import Nav from "./components/Nav"

function App() {
  return (
    //<Title /> nao usando o props
    <div>
      <Title text="Olá, world pela segunda vez"/>
      <Title text="Bem vindo, " />
      <Title />
      <Nav items={[1,2,3,4,5]} />
    </div>
  )
}

export default App