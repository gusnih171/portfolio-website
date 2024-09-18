import CardFlip from './CardFlip';
import GnText from './GnText.jsx';
import Background from './Background.jsx';
import Logo from './Logo.jsx';
const App = () => {
  return (
    <div>  
    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div>
        <Logo/>
        <Background/>
      </div>
      <GnText/>
      <CardFlip/>
    </div>
  );
}

export default App;
