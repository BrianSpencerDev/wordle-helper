import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {
  

  const [words, setWords] = useState([]);

  function getWords(words){
    setWords(words);
  }

  return (
    <div className="flex justify-center .h-screen .w-screen">
      <Head>
        <title>Wordle Helper</title>
        <meta name="description" content="Wordle Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full'>
        <Navbar />
        <p>Enter up to 5 letters. Only enter a-z, A-Z, or ?. Use ? to fill space</p>
        <p>Lowercase letters = yellow letters</p>
        <p>Uppercase letters = green letters</p>
        <Input onSubmit={getWords}/>
        <Results words={words}/>
      </main>
    </div>
  )
}
