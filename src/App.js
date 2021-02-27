import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import State from './components/State'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import NameListWithIndex from './components/NameListWithIndex'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecyleA from './components/LifecyleA'

function App() {
  return (
    <div className="App">
      <LifecyleA/>
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameListWithIndex/> */}
      {/* <NameList/> */}
      {/* < UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* { <FunctionClick/> } */}
      {/* <Counter/> */}
      {/* <State/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>Chidren props</p>
      </Greet>
      <Greet name="Clark" heroName="hero2">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="hero3"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark" heroName="hero2"/>
      <Welcome name="Diana" heroName="hero3"/>  */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
