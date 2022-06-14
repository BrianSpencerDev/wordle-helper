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
    <div className='w-max-5xl'>
      <Head>
        <title>Wordle Helper</title>
        <meta name="description" content="Wordle Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center'>
        <Navbar />
        <Input onSubmit={getWords}/>
        <Results words={words}/>
      </main>
    </div>
  )
}
