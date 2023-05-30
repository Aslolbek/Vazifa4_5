const {Router} = require("express")
const {getTodo, addTodo, log_in} = require("../controllers/todo.controller")
const router = Router()

router.get("/todo", getTodo )
router.post("/Login", log_in )
router.post("/Register", addTodo)

module.exports = router;