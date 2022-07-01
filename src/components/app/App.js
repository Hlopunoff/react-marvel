import CharList from '../charList/CharList';
import DefaultInfo from '../defaultInfo/DefaultInfo';
import Header from '../header/Header';
import RandomChar from '../randomChar/RandomChar';
import './app.scss';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <RandomChar/>

        <section className="cards">
          <div className="container">
            <div className="cards__wrap">
              <CharList/>
              <DefaultInfo/>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}

export default App;
