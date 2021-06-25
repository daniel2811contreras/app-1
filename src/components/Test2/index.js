import { useEffect, useState } from 'react'

function Test2() {
  const [name, setName] = useState('daniel')
  const [contar, setContar] = useState(0)

  useEffect(() => {
    console.log('ok');
    setName('pepe')
  },[contar])

  return (
    <div className="App">
         <h1>hola mundo {name}</h1>
         <h3>copntador {contar}</h3>
        <button onClick={() => setContar(contar+1) }> 1+ </button> 
      </div>
  )
}

export default Test2
