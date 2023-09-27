import logo from './logo.svg';
import './App.css';

function Title({ color = 'red', children, hidden = false, ...props }) {
  if (hidden) {
      return null;
  }

  return (<h1 style={{color: color}} {...props}>{children}</h1>);
}

function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title color="blue" id="my-id" data-demo="demo">Hello World</Title>
    <Title color="red" id="my-id" data-demo="demo">Hello World !</Title>
  </>
);
}

export default App;