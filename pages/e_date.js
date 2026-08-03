import { useState, useEffect } from "react";

export default function App() {

   const [time, setTime] = useState(new Date());

   useEffect(() => {

      const timer = setInterval(() => {

         setTime(new Date());

      },1000);

      return () => {

         clearInterval(timer);

      }

   },[]);

   return (

      <h1>{time.toLocaleTimeString()}</h1>

   );

}