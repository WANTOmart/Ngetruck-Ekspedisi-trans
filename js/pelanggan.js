let pelanggan =
JSON.parse(localStorage.getItem("pelanggan")) || [];

function tampilkan(){

let html="";

pelanggan.forEach((p,index)=>{

html += `
<tr>
<td>${p.nama}</td>
</tr>
`;

});

document.getElementById("dataPelanggan").innerHTML=html;

}

function simpan(){

const nama =
document.getElementById("nama").value;

pelanggan.push({
nama
});

localStorage.setItem(
"pelanggan",
JSON.stringify(pelanggan)
);

tampilkan();

}

tampilkan();
