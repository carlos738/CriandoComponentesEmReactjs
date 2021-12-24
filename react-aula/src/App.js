import Item from './components/Item/Item';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h1>Minha primeira criação com React</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
    </div>
  );
}

export default App;

// export default function App () {
//   return (
//     <h1>Hello World</h1>
//   )
// }