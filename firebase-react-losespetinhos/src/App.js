import React from 'react';
import './App.css';
import firebase from './firebase';
import { VendasInput } from './VendasInput';





function App() {
  const [vendas, setSpells] = React.useState([])
  const [newQtd_Vendida, setQtd_Vendida] = React.useState([])






  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("vendas").get()
      setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

    }
    fetchData()
  }, [])
  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('vendas').add({ qtd_vendida: newQtd_Vendida })

  }
  return (

    <ul>
      <input value={newQtd_Vendida} onChange={(e) => setQtd_Vendida(e.target.value)} />

      <button onClick={onCreate}>Create</button>
      {vendas.map(vendas => (

        <li key={vendas.qtd_vendida}>
          <VendasInput vendas={vendas} />
        </li>

      ))}
    </ul>
  );
}

export default App;
