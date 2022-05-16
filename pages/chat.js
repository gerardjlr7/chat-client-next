import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { Loader } from 'rsuite';
import styles from '../styles/Home.module.css'
import 'rsuite/dist/rsuite.min.css';
import ChatClientgRPC from '../libs/grpc/client';


export default function Chat() {

    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const query = router.query;
    const name = query.name;
    let client = null;

    useEffect(() => {
      setTimeout(() =>{
        if (name !== undefined){
          client = new ChatClientgRPC();
          client.connect(name, (err, response) => {
              if (err){
                  console.error(err);
              }else{
                  console.log(response.getMessage());
              }
              setLoading(false);
          });
        }
      }, 1000);
    },[name]);


    return (
      <div className={styles.container}>
        <Head>
          <title>Chat</title>
          <meta name="description" content="Chat with gRPC" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
         {loading ? <Loader center size="md" content="loading" /> : <h1>Hola {name}</h1> }
        </main>
  
        
      </div>
    )
  }