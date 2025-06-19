db.produk.bulkWrite([
  { insertOne: { document: { nama: "Teh", harga: 5000, stok: 30 } } },
  { insertOne: { document: { nama: "Susu", harga: 12000, stok: 15 } } },
  { deleteOne: { filter: { nama: "Kopi" } } }
])
