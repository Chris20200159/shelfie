module.exports ={
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.get_products()
    .then((results)=> {
      res.status(200).send(results)
    })
  },
  addProduct: (req, res) => {
    
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const {id} = req.params
    db.delete_product(id)
    .then((results)=> {
      res.status(200).send(results)
    })
  },
  editProduct: (req, res) => {

  }
}