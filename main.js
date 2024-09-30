import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
apiKey: "AIzaSyDmI0zRauvzaL4oEuXinkmXhGiwTsYxYQc",
  authDomain: "insan-cemerlang-ee7af.firebaseapp.com",
  projectId: "insan-cemerlang-ee7af",
  storageBucket: "insan-cemerlang-ee7af.appspot.com",
  messagingSenderId: "1047091827759",
  appId: "1:1047091827759:web:0f1742d6f3922f856de2da",
  measurementId: "G-GL8J5GC8XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const basisdata = getFirestore(app);


export async function ambilDataPelanggan() {
  const refDokumen = collection(basisdata, "PELANGGAN");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);
  
  
  let hasilKueri = [];
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      notlpn: dokumen.data().notlpn
    })
  })
  
  return hasilKueri;
}

export async function tambahPelanggan(nama, notlpn) {
  try {
    // menyimpan data ke firebase
    const refDokumen =await addDoc(collection(basisdata,"PELANGGAN"), {
      nama: nama,
      notlpn: notlpn
   
    })
    
    //menampilkan pesan hasil 
    console.log("berhasil menyimpan data pelanggan")
  } catch (error) {
    //menampilkan pesan gagal
    console.log("gagal menyimpan data pelanggan" + error)
  }
}