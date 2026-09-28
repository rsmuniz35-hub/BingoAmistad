// Configuração Oficial do Firebase - Bingo Amistad
const firebaseConfig = {
    apiKey: "AIzaSyDKkdXBeeMozdP1zAUBLUIX0-EMXsZvj5I",
    authDomain: "bingoamistad-3b221.firebaseapp.com",
    projectId: "bingoamistad-3b221",
    storageBucket: "bingoamistad-3b221.firebasestorage.app",
    messagingSenderId: "49356069589",
    appId: "1:49356069589:web:0a2025758ea9bd7c6a605c",
    measurementId: "G-T1HPGNY1ZT"
};

// Inicializa o Firebase de forma segura
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); 
}

const db = firebase.firestore();