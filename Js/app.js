function saveReport(){

const issue=document.getElementById("issue").value;

if(!issue) return;

db.collection("reports").add({
issue:issue,
time:firebase.firestore.FieldValue.serverTimestamp()
});

alert("Report saved");

}

db.collection("reports")
.orderBy("time","desc")
.onSnapshot(snapshot=>{

const list=document.getElementById("reportList");

list.innerHTML="";

snapshot.forEach(doc=>{

list.innerHTML +=
`<div>${doc.data().issue}</div>`;

});

});
