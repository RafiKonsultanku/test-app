import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Data Karyawan</h1>
      <button><a href=''>Add</a></button>
      <table>
        <tr>
          <th>Nama</th>
          <th>Tanggal Lahir</th>
          <th>Tempat Lahir</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th><button>Edit</button></th>
          <th><button>Delete</button></th>
        </tr>
        <tr>
          </tr>  
      </table>
      <div className='form'>
        <input type='text' name='nama' />
        <input type='text' name='tempat_lahir' />
        <input type='text' name='tanggal_lahir' />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
