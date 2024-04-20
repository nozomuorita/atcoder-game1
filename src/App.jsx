import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getapi } from "../utils/get";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {
//   // pokeAPI
//   const initialURL = "https://pokeapi.co/api/v2/pokemon"; //endpoint
//   const [loading, setLoading] = useState(true); //最初にloading出したいのでtrue
//   const [pokemonData, setPokemonData] = useState([]);


//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       // すべてのポケモンデータを取得
//       let res = await getapi(initialURL);
//       // 詳細データを取得
//       loadPokemon(res.results);
//       setLoading(false);
//     };
//     fetchPokemonData();
//   }, []);

//   const loadPokemon = async (data) => {
//     let _pokemonData = await Promise.all(
//       // Promise.all(配列)、全部とってくるまで待つ
//       data.map((pokemon) => {
//         let pokemonRecord = getapi(pokemon.url);
//         return pokemonRecord;
//       })
//     );
//     setPokemonData(_pokemonData);
//   };
//   // console.log(pokemonData); //もしコンソールの結果がPromise {<pending>}というものなら、async-awaitつけ忘れ

//   return (
//     <>
//       <Navbar />
//       <div className="App">
//         {loading ? (
//           <p className="loader">ロード中。。。</p>
//         ) : (
//           <div>
//             {pokemonData.map((pokemon, i) => {
//               return <Card key={i} pokemon={pokemon} />;
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import Fetch from './components/Fetch.jsx';//⇦ ここを追加した

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fetch /> //⇦ ここを追加した
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
