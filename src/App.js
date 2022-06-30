import './App.css';
import candy from './media/candy.svg';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />

      <p>Russia already controls a large stretch of Ukraine's Black Sea coast, plus the Crimean Peninsula and the entire Sea of Azov. Holding Snake Island completed an effective blockade of Odesa, and meant exports of the vast majority of Ukrainian grain were impossible.

        It also meant the Black Sea coast became vulnerable to attack too, and military experts in Kyiv voiced fears that Russia could install long-range air defences, such as an S-400 air missile system.

        A look at the map also shows that Russian control of the island represented a threat to Nato member Romania - both its key port of Constanta and traffic in the mouth of the River Danube.

        It is not just strategically significant - this area is also rich in reserves of petroleum and gas.
        Map of Black Sea</p>

      <img src={candy} className="App-logo" alt="candy" />


    </div>


  );
}

export default App;
