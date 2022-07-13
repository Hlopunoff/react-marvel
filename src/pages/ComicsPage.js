import React from 'react'
import Banner from '../components/banner/Banner';
import ComicList from '../components/comicList/ComicList';

const ComicsPage = () => {
  return (
    <main className='main'>
      <section className="section">
        <div className="container">
          <Banner/>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ComicList/>
        </div>
      </section>
    </main>
  )
}


export default ComicsPage;