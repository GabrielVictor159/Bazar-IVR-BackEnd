import express from 'express';
const AdminController = express.Router();
import {AdminService} from "../services/AdminService";
const adminService = new AdminService();

AdminController.get('/Admin', async (req,res) =>{
    try{
        const Login =  await adminService.Login(req.body.Nome, req.body.Senha);
        res.send(Login);
    }
   
    catch(exception:any){
        console.log(exception.message)
    }
   });


export default AdminController
