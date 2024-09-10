import { useState } from 'react'
import Form from '../components/Form'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [rubrica, setRubrica] = useState([]);
  const [contattoDaModificare, setContattoDaModificare] = useState(null);
  const [idDaModificare, setIdDaModificare] = useState(null);

 

  function apriForm(){
    setIsOpen(true);
  }

  function cancellaContatto(indexDaRimuovere){
    setRubrica(rubrica.filter((_, index) => index !== indexDaRimuovere));
  }

  function preparaModifica(id){
    setIsOpen(true);
    setIdDaModificare(id)
    setContattoDaModificare({nome:rubrica[id].nome, cognome:rubrica[id].cognome, tel:rubrica[id].tel})
    cancellaContatto(id)
  }

  return (
    <>
      <div id='container1'>
        <div id='container2'>
          <div id='aggiungi-btn-container'>
            <button id='aggiungi-contatto' onClick={apriForm}> + </button>
          </div>
          <div id='contatti-container'>
            {rubrica.map((contatto, index)=>(
              <div key={index} className='schede-contatti'>
                <li>{contatto.nome}</li>
                <li>{contatto.cognome}</li>
                <li>{contatto.tel}</li>
                <button className='elimina-contatto'  onClick={()=>cancellaContatto(index)}>X</button>
                <button className='modifica-contatto'  onClick={()=>preparaModifica(index)}>M</button>
              </div>
            ))}
          </div>
        </div>

        <div id='form-container'>
          <Form 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            rubrica={rubrica} 
            setRubrica={setRubrica} 
            contattoDaModificare={contattoDaModificare}  
          />
        </div>
      </div>
      
    </>
  )
}

export default App
