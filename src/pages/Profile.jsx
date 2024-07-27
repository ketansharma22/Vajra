import React from 'react'

import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
var BPM

 get(child(dbRef, `BPM`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    BPM=snapshot.val()
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

export default function Profile() {
  return (
    <div>
        <h1>
            
            {BPM}
        </h1>
    </div>
  )
}

// import React, { useState, useEffect } from 'react';

// const RealTimeData = () => {
//   const [data, setData] = useState({}); // initialize state with empty object
//   const [isChanged, setIsChanged] = useState(false); // flag to indicate data change

//   useEffect(() => {
//     // fetch real-time data from database or API
//     const fetchData = async () => {
//       const response = await fetch('/api/data');
//       const newData = await response.json();
//       setData(newData);
//       setIsChanged(true); // set flag to true when data changes
//     };
//     fetchData();

//     // set interval to fetch data every 1 second (adjust according to your needs)
//     const intervalId = setInterval(fetchData, 1000);

//     return () => {
//       clearInterval(intervalId); // clear interval when component unmounts
//     };
//   }, [isChanged]); // re-run effect when isChanged flag changes

//   return (
//     <div>
//       {Object.keys(data).map((key, index) => (
//         <div key={index}>
//           <span>{key}: {data[key]}</span>
//           {isChanged && <span style={{ color: 'green' }}>(Updated)</span>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RealTimeData;