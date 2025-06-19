db.createCollection("produk_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "harga", "stok"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus string"
        },
        harga: {
          bsonType: "int",
          description: "harus integer"
        },
        stok: {
          bsonType: "int",
          description: "harus integer"
        }
      }
    }
  }
})
