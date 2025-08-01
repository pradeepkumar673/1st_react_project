import Navbar from './components/Navbar'
import Head from './components/Heading'
import Hero from './components/Hero'
import News from './components/News'
import FoodTable from './components/FoodTable'
import Side_file from './components/Side_file'
import Final from './components/Final'
function App() {

  return (
    <div className='flex flex-col justify-center'>
      <Navbar />
      <Head />
      <Hero />
      <div className="container flex flex-col lg:flex-row">
        <main className="flex-1">
          <News />
          <FoodTable />
        </main>
        <Side_file />
      </div>
      <Final />
    </div>
  )
}

export default App
