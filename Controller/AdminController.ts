import express from 'express';
const AdminController = express.Router();
import {AdminService} from "../services/AdminService";
const adminService = new AdminService();

AdminController.get('/Admin', async (req,res) =>{
    const Login =  await adminService.Login(req.body.Nome, req.body.Senha);
    res.send(Login);
   });


export default AdminController
