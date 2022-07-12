import React, {useState} from 'react';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import DefaultInfo from '../defaultInfo/DefaultInfo';
import Header from '../header/Header';
import RandomChar from '../randomChar/RandomChar';
import './app.scss';

function App() {
  const [selected, setSelected] = useState('');

  const setSelectedChar = (id) => setSelected(id);

  return (
    <>
      <Header/>
      <main className="main">
        <RandomChar/>

        <section className="cards">
          <div className="container">
            <div className="cards__wrap">
              <CharList setSelected={setSelectedChar}/>
              {selected ? <CharInfo selected={selected}/> : <DefaultInfo/>}
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}

export default App;
