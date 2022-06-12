import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Input from '../components/Input'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {
  

  const [words, setWords] = useState([]);
  const decoy = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    if ("maxTouchPoints" in navigator) {
      const hasTouchScreen = navigator.maxTouchPoints > 0;

      if (hasTouchScreen) {
        setIsMobile(hasTouchScreen);

        decoy.current.focus();

      }
    }
  },
  [setIsMobile]
  )

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
        {isMobile ? <input ref={decoy} type="text" className='hidden text-xs' spellCheck='false'></input> : null}
        <Results words={words}/>
      </main>
    </div>
  )
}
