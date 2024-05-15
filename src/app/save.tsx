
'use client'
import Image from "next/image";
import axios from 'axios'; 
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, useEffect, useState } from "react";




export default  function Home() {

   const [data, setData] = useState([]);

   var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });


  useEffect(() => {
    axios.get('http://localhost:8000/api/get')
      .then((res) => {
       console.log(res)
       setData(res.data)
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
    

    <p className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-1xl" style={{color:'#1A8395', alignSelf:'flex-start', marginLeft: 70}}>Ver Outros Projetos do Proponente</p>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-8xl lg:grid-cols-3 lg:text-left" >  

       
      

        {data.map((post: {
          [x: string]: ReactNode; id: Key | null | undefined; nome: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; 
})=>
            <div  key={post.id} className="max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
              <span className="inline-flex items-center bg-100 text-800 text-xs font-medium px-2.5 py-0.5  dark:bg-900 dark:text-300" style={{color:'#C6A08B', borderRadius: 2, backgroundColor: '#FFF2DB'}}>               
                ROUANET
              </span>              
                  <h5 className="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-ddak">{post.nome}</h5>
                   <p>{post.municipio} • {post.uf}  </p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
              <div className="flex flex-row ...">
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Aprovado </p>      <p className="font-semibold tracking-tight text-gray-900 dark:text-ddak" style={{marginLeft: 25}}>{formatter.format(post.valor_aprovado)}</p>  
                </div>
                <div className="flex flex-row ...">
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Captado  </p>        <p className="font-semibold tracking-tight text-gray-900 dark:text-ddak" style={{marginLeft: 25}}>{formatter.format(post.valor_captado)}</p>
              </div>  

              <div className="flex flex-row ..." style={{marginLeft: 75}}>
              <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-white-800 dark:text-gray-400 dark:border-gray-300 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                 ADICIONAR
               </button>
              <button type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-white-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
       
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                width="24px" height="24px" viewBox="0 0 37 32" enable-background="new 0 0 37 32">
              <g>
                <path fill="#828282" d="M27,0c-2.476,0-4.856,0.921-6.704,2.595C19.594,3.23,18.993,3.952,18.5,4.749
                  c-0.493-0.797-1.094-1.519-1.796-2.155C14.856,0.921,12.476,0,10,0C4.486,0,0,4.486,0,10c0,3.722,1.158,6.66,3.871,9.825
                  c3.942,4.6,13.919,11.62,14.342,11.917c0.086,0.061,0.187,0.091,0.287,0.091s0.201-0.03,0.287-0.091
                  c0.423-0.297,10.4-7.317,14.343-11.917C35.842,16.66,37,13.722,37,10C37,4.486,32.514,0,27,0z M32.371,19.175
                  C28.876,23.251,20.191,29.516,18.5,30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085,16.206,1,13.462,1,10c0-4.963,4.038-9,9-9
                  c2.227,0,4.37,0.829,6.032,2.335c0.838,0.76,1.518,1.656,2.02,2.664c0.17,0.34,0.726,0.34,0.896,0
                  c0.502-1.008,1.182-1.904,2.02-2.663C22.63,1.829,24.773,1,27,1c4.962,0,9,4.037,9,9C36,13.462,34.915,16.206,32.371,19.175z"/>
              </g>
              </svg>
                </button>
                </div>
          
            </div>
         )}    
       
      </div>
    

    </main>
  );
}
