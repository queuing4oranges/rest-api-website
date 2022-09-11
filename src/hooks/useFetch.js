import { useState, useEffect } from 'react';

export const useFetch = (url) =>{
    const [data, setData] = useState(null)          
    const [isPending, setIsPending] = useState(false) 
    const [error, setError] = useState(null)            

    useEffect(()=>{                                

        const controller = new AbortController()    


        const fetchData = async () => {             
            
            setIsPending(true)  
                                                    
            try{                                    
            const response = await fetch(url, { signal: controller.signal})   
                                                    
            if(!response.ok){
                throw new Error(response.statusText)
            }                                        
            console.log(response)
            const json = await response.json()     
            
            setIsPending(false)            

            setData(json)
            setError(null)                          
            } catch (err) {                        

            if (err.name === "AbortError"){         
                console.log("The fetch was aborted.")
                }else{            setError('Could not fetch the data')
                setIsPending(false)
                console.log(err.message)                
                }               
            }              

        }                                           

        fetchData()
        return () =>{                              
            controller.abort()                      
        }
    }, [url])

    return { data: data, isPending, error}                             
}

