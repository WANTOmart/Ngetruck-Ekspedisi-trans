let armada =
JSON.parse(localStorage.getItem("armada")) || [];

function tampilArmada(){

let html="";

armada.forEach(a=>{

html += `
<tr>
<td>${a.nopol}</td>
<td>${a.jenis}</td>
</tr>
`;

});

document.getElementById(
"dataArmada"
).innerHTML=html;

}

function simpanArmada(){

armada.push({

nopol:
document.getElementById("nopol").value,

jenis:
document.getElementById("jenis").value

});

localStorage.setItem(
"armada",
JSON.stringify(armada)
);

tampilArmada();

}

tampilArmada();
