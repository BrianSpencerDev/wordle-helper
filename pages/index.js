import { useState } from 'react'
import Head from 'next/head'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Word from '../components/Word'
import Results from '../components/Results'

export default function Home() {

  const [words, setWords] = useState([]);

  function getWords(words){
    setWords(words);
  }

  return (
    <div className="flex justify-center .h-screen .w-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Input onSubmit={getWords}/>
        {console.log(words)}
        {console.log(Array.isArray(words))}
        <Results words={words}/>
      </main>
    </div>
  )
}
