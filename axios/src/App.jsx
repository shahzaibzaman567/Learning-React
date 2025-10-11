import { useState } from 'react'
import Movie1 from './components/movie1'
import { useEffect } from 'react'
import Post from './components/post'

function App() {

  // Reduce retduce the element of an array  to a singel value .reduce ()

  //get  Math.max(max is the  largest number ) in array and Math.min(min is the smallest number) in array 
  const prise = [2, 3, 4, 5, 10]

  let total = prise.reduce(sum);
  console.log(total)


  function sum(acc, ele) {

    return acc + ele;


  }




  return (
    <>
      <div>
        {/* <h1 style={{textAlign:"center"}}>{data[1].title}</h1> */}
      </div>
      <Movie1 />
      <Post />
    </>
  )
}

export default App
