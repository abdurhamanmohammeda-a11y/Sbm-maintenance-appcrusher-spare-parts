const firebaseConfig = {
apiKey:"YOUR_KEY",
authDomain:"YOUR_DOMAIN",
projectId:"YOUR_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function login(){

const e=document.getElementById("email").value;
const p=document.getElementById("password").value;

auth.signInWithEmailAndPassword(e,p)
.catch(err=>{
document.getElementById("authMsg").innerText=err.message;
});

}

function logout(){
auth.signOut();
}

auth.onAuthStateChanged(user=>{

if(user){

document.getElementById("loginSection").style.display="none";
document.getElementById("mainApp").style.display="block";

}else{

document.getElementById("loginSection").style.display="block";
document.getElementById("mainApp").style.display="none";

}

});
