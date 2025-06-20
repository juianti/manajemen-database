// Key-Value di MongoDB (gunakan insertMany)
db.sekolah_kv.insertMany([
  { _id: "siswa:001", value: "Ani - 7A" },
  { _id: "siswa:002", value: "Budi - 7A" },
  { _id: "siswa:003", value: "Citra - 7B" },
  { _id: "siswa:004", value: "Dedi - 7B" },
  { _id: "siswa:005", value: "Eka - 7B" }
])
