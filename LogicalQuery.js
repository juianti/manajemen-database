db.produk.find({
  $or: [
    { harga: { $gt: 10000 } },
    { stok: { $lt: 10 } }
  ]
})
