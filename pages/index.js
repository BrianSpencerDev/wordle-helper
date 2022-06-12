import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {

  const [words, setWords] = useState([]);
  const decoy = useRef();

  function getWords(words){
    setWords(words);
  }

  useEffect(() => {decoy.current.focus();}, [])

  return (
    <div className="flex justify-center .h-screen .w-screen">
      <Head>
        <title>Wordle Helper</title>
        <meta name="description" content="Wordle Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full'>
        <Navbar />
        <Input onSubmit={getWords}/>
        <input ref={decoy} type="text" className='hidden text-xs' spellCheck='false'></input>
        <Results words={words}/>
      </main>
    </div>
  )
}
