import './styles.css'

function App() {
  return <form className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='Item'>New Item</label>
      <input type="text" id="Item"></input>
      <button className='btn'>Add</button>
    </div>

  </form>
}

export default App
