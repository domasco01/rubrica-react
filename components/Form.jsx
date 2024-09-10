import { useEffect, useState } from "react";

function Form({isOpen, setIsOpen, setRubrica, rubrica, contattoDaModificare}){

    const [contatto, setContatto] = useState({nome:"", cognome:"", tel:""});

    useEffect(()=>{
        if(contattoDaModificare){
            setContatto(contattoDaModificare);
        }
    }, [contattoDaModificare])

    function chiudiForm(){
        setIsOpen(false)
        setContatto({nome:"", cognome:"", tel:""});
    }


    function handleSubmit(e){
        e.preventDefault();
    
        setRubrica([...rubrica, contatto])
        setContatto({ nome: "", cognome: "", tel: "" });
        setIsOpen(false)
    }
    
    if (isOpen){
        return(
            <form id="form" onSubmit={handleSubmit}>
                <button onClick={chiudiForm} id="chiudi-form-btn">X</button>
                <div id="input-container">
                    <input 
                        type="text"
                        name="nome" 
                        placeholder="NOME" 
                        value={contatto.nome} 
                        onChange={(e)=>setContatto({...contatto, nome: e.target.value})} 
                        required 
                    />
                    <input 
                        type="text"
                        name="cognome" 
                        placeholder="COGNOME" 
                        value={contatto.cognome} 
                        onChange={(e)=>setContatto({...contatto, cognome: e.target.value})} 
                    />
                    <input 
                        type="number"
                        name="tel" 
                        placeholder="TEL" 
                        value={contatto.tel} 
                        onChange={(e)=>setContatto({...contatto, tel: e.target.value})} 
                        required
                    />
                </div>
                <button id="aggiungi-btn" type="submit">ADD</button>
            </form>
        )
    }
    
}

export default Form

