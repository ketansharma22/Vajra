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
