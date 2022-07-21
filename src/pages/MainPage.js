import React, {useState} from 'react'
import RandomChar from '../components/randomChar/RandomChar';
import CharList from '../components/charList/CharList';
import CharInfo from '../components/charInfo/CharInfo';
import DefaultInfo from '../components/defaultInfo/DefaultInfo';
import Form from '../components/form/Form';

const MainPage = () => {
    const [selected, setSelected] = useState('');

    const setSelectedChar = (id) => setSelected(id);
    return (
      <main className="main">
        <RandomChar/>

        <section className="cards">
          <div className="container">
            <div className="cards__wrap">
              <CharList setSelected={setSelectedChar}/>
              <aside>
                {selected ? <CharInfo selected={selected}/> : <DefaultInfo/>}
                <Form/>
              </aside>
            </div>
          </div>
        </section>
        
      </main>
  );
}

export default MainPage;