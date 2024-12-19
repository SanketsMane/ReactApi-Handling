 
 import newsData from './responseMock.json'
 export default function fetchapi (){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve({data:newsData, status:"200"})
        },2000)
    })


}