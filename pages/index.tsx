import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todos, setTodos] = useState([] as any);
  const [ tempText, setTempText] = useState<string>("");

  const addTodo = (text: string) => {
    
    setTodos([...todos, text]);
  };

  useEffect(()=>{
    console.log(todos);
  },[todos]);

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.card}>To-Do</h1>
        <div style={{display:'flex', flexDirection:"column"}}>
        <input
          type="text"
          value={tempText}
          placeholder='Add todo'
          onChange={(e) => {
            setTempText(e.target.value)
          }}
        />
        <button onClick={()=>{
          addTodo(tempText);
          setTempText('');
        }}>Add</button>
        <ul>
          {todos.map((todo :(''),idx : any)=>{
            return <li key={idx}>{todo}</li>
          })}
        </ul>
        </div>
      </main>
      <div> </div>
    </>
  )
}
