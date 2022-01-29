import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FormTest } from '../src/components/FormTest'
import { Input } from '../src/components/input'
import { Textarea } from '../src/components/Textarea'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  const [user, setUser] = useState<User>({} as User);

  return (
    <div
      className='form-group'
      style={{
        height: '100vh',
        backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        className='container-fluid'
        style={{
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          width: '500px',
          height: '350px',
        }}
      >
        <FormTest
          name={user.name}
          description={user.description}
           />
      </div>

    </div>

  )
}

export default Home
