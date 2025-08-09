import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function testFirestore() {
  const querySnapshot = await getDocs(collection(db, "productos"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

testFirestore();
