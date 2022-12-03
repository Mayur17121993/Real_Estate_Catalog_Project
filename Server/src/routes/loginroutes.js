let express= require("express")
const router = express.Router();
router.use(express.json());
const Product = require("../connectionAndSchema/data");

router.use(express.json());
//get
router.get("/", async (req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
    try {
      let data = await Product.create(req.body)
      res.send(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });
  module.exports = router;   