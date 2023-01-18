import type { NextPage } from 'next'

import MetaInfo from '../components/MetaInfo'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { Fragment } from 'react'

const Home: NextPage = () => {
  return (
    <Fragment>
      <MetaInfo />
      <main>
        <Main />
      </main>

      <footer >
        <Footer />
      </footer>
    </Fragment>
  )
}

export default Home;
