import type { NextPage } from 'next'

import MetaInfo from '../components/MetaInfo'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <MetaInfo />
      <main>
        <Main />
      </main>

      <footer >
        <Footer />
      </footer>
    </div>
  )
}

export default Home;
