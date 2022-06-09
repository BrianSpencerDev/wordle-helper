import { useState } from 'react'
import Head from 'next/head'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import Letter from '../components/Letter'

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
        <Input onSubmit={getWords}/>
        {console.log(words)}
        {console.log(Array.isArray(words))}
        <Results words={words}/>
      </main>
    </div>
  )
}
