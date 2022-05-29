import './Header.css'
import Me from './assets/image.jpg'

function Header () {
  return (
    <div>
      <section className='intro'>
        <div className='txt'> 
          <h1>
            <big>Hi there!</big>
          </h1>
          <h1>Nimah here</h1>
          <h4> I am a Machine Learning Scientist </h4>
        </div>
        <img  className="me" src= {Me} alt="Me"/> 
      </section>
    </div>
  )
}
export default Header