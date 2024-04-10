import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getFirestore, collection, query, getDocs } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDrZm4mfMAyRkmwPI0BQ7U5Ycaqbygv20A",
    authDomain: "smiccat-5d93b.firebaseapp.com",
    databaseURL: "https://smiccat-5d93b-default-rtdb.firebaseio.com",
    projectId: "smiccat-5d93b",
    storageBucket: "smiccat-5d93b.appspot.com",
    messagingSenderId: "306397029142",
    appId: "1:306397029142:web:998d7786e1311caff4e637",
    measurementId: "G-6XG0EDYRYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadComments() {
    const q = query(collection(db, "comentarios"));
    const querySnapshot = await getDocs(q);
    const comentariosList = document.getElementById('comments-list');
    querySnapshot.forEach((doc) => {
        const comentario = doc.data();
        const fechaActual = new Date().toLocaleDateString();
        const nuevoComentario = document.createElement('li');
        nuevoComentario.innerHTML = `
            <div>
                <div class="comment-avatar"><img src="/istatic/img/usuario.png" alt="Foto perfil"></div>
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name">${comentario.usuario}</h6>
                        <span>${fechaActual}</span>
                        
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
}

loadComments();
