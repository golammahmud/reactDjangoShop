import React, { useEffect, useContext, useState }  from 'react'

function Home() {
    const [items, setItem] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchItem();
      }, []);
    
      const fetchItem = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/products/`);
          if (response.status === 200) {
            const item = await response.json();
            setItem(item);
            setLoading(false);
          } else {
            throw new Error(response.status);
          }
        } catch (e) {
          console.log(e);
        }
      };


    return (
        <div>
               <h2>this is a Home page</h2>


               
        </div>
    )
}

export default Home;
