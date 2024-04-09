import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDflVrzbmpcWrOyOotE1ltX6RQ5hil9MaA",
    authDomain: "pruebacoments.firebaseapp.com",
    databaseURL: "https://pruebacoments-default-rtdb.firebaseio.com",
    projectId: "pruebacoments",
    storageBucket: "pruebacoments.appspot.com",
    messagingSenderId: "78431417841",
    appId: "1:78431417841:web:72e6c954389b7d5e5c0050"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Your Firebase database reference
const db = getFirestore(app);


const q = query(collection(db, "comentarios"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

// const comentariosRef = db.ref('comentarios');

// Add Firebase event listeners and update comments dynamically
comentariosRef.on('child_added', (snapshot) => {
    const comentario = snapshot.val();
    const comentariosList = document.getElementById('comments-list');
    const nuevoComentario = document.createElement('li');
    nuevoComentario.innerHTML = `
<div>
  <div class="comment-avatar"><img src="/istatic/img/avatar.jpg" alt="Foto perfil"></div>
  <div class="comment-box">
    <div class="comment-head">
      <h6 class="comment-name">${comentario.usuario}</h6>
      <span>${comentario.Fecha}</span>
      <i class="fa fa-reply"></i>
      <i class="fa fa-heart"></i>
    </div>
    <div class="comment-content">
      ${comentario.comentario}
    </div>
  </div>
</div>
`;
    comentariosList.appendChild(nuevoComentario);
});

