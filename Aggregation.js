db.produk.aggregate([
  {
    $group: {
      _id: null,
      total_stok: { $sum: "$stok" }
    }
  }
])
