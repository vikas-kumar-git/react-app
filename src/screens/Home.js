import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'

export default function Home() {
  return (
    <>
      <div>
        <div className="container">
          <Navbar title="TextUtils" />
          <TextForm heading='Enter text here to analyze' />
        </div>
      </div>
    </>
  )
}
