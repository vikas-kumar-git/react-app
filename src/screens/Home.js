
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
export default function Home() {
  return (
    <>
    <div>
    <Navbar title="TextUtils"/>
    <div className="container">
      <TextForm heading='Enter text here to analyze' />
    </div>
    </div>
  </>
    
  )
}
