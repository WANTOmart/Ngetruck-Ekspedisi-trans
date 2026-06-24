let pengiriman =
JSON.parse(localStorage.getItem("pengiriman")) || [];

function buatResi(){

return "EXP" + Date.now();

}

function tampil(){

let html="";

pengiriman.forEach(p=>{

html += `
<tr>
<td>${p.resi}</td>
<td>${p.pengirim}</td>
<td>${p.tujuan}</td>
<td>${p.status}</td>
</tr>
`;

});

document.getElementById(
"dataPengiriman"
).innerHTML=html;

}

function simpanPengiriman(){

pengiriman.push({

resi:buatResi(),

pengirim:
document.getElementById("pengirim").value,

tujuan:
document.getElementById("tujuan").value,

barang:
document.getElementById("barang").value,

status:"Order Diterima"

});

localStorage.setItem(
"pengiriman",
JSON.stringify(pengiriman)
);

tampil();

}

tampil();
