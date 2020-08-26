module.exports ={
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_products()
    .then((results)=> {
      res.status(200).send(results)
    })
  },
  addProduct: async (req, res) => {
    const { productName, price, imageUrl } = req.body;
    const db = req.app.get("db");
    const products = await db.add_product([
      productName,
      price,
      imageUrl,
    ]);
    res.status(200).send(products);
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params
    db.delete_product(id)
    .then((results)=> {
      res.status(200).send(results)
    })
  },
  editProduct: async (req, res) => {
    const { productName, price, imageUrl } = req.body;
    const { id }= req.params
    const db = req.app.get("db");

    const products = await db.edit_product([
      productName,
      price,
      imageUrl,
      id,
    ]);
      res.status(200).send(products);
  }
}