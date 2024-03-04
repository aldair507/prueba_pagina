import { Router } from "express";
import {  getUsuarios, registerUsuarios, deleteUsuarios, updateUsuarios, getAllusuarios,loginUsuario,logoutUsuario} from "../controllers/user.controllers.js";
const router= Router()

router.get("/:roleId",getUsuarios )
router.get("/",getAllusuarios )
router.post("/login",loginUsuario)
router.post("/logout",logoutUsuario)
router.post("/register", registerUsuarios)
router.delete("/:id", deleteUsuarios)
router.put("/:id",updateUsuarios)





export default router;