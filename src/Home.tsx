import './App.css'

function HomePage() {
  return (
    <div id='bg'>
      <div id='circles' className='big'></div>
      <div id='abs'>
        <div id='circle' className='main'>
          <div id='logo'>
            <div id='logohover'>
              <h1><span id='cursor'>_</span>username<span id='red'>Taken</span></h1>
            </div>

            <div className='columns-container'>
              <button className='bluebutton'>Securing</button>
              <button>Creating</button>
              <button className='greenbutton'>Learning</button>

            </div>
          </div>
          <div id='circut'></div>
        </div>
        </div>
      </div>
  )
}

export default HomePage;