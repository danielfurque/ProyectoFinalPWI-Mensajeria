export const fetchContactos = async () => {

    const response = await fetch('/mensajeria.json', { method: "GET" }); 
     return  response.json();
   };
   
   