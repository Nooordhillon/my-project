import axios from "axios"
import { useEffect } from "react"


export const DataHook= async()=>{
   
const response=  await axios.get('https://jsonplaceholder.typicode.com/posts')
         return response 

} 