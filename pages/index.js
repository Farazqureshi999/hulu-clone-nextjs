import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utils/request'



export default function Home({results}) {
  return (
    <>
    <Head>
      <title>Hulu Clone</title>
      <link rel="icon" href='/favicon.ico'/>
    </Head>
    <Header/>
    <Nav/>
    <Result results={results}/>
    </>
    
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(genre);
  console.log(`https://api.themoviedb.org/3${request[genre]?.url}`);
  const res = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)
  const data = await res.json()
  // console.log(data);

  return {
    props: {
       results: data.results,
    }, 
  }
}
