
import fs from 'fs';
import { admin } from "./Admin";
import VerificarAdmin from './VerificarAdmin';

export class AdminService {
    constructor() { }

    Login = (Nome: string, Senha: string) => {
      const resposta =  VerificarAdmin(Nome, Senha)
      return resposta

    }

    
    alterarAdmin(nomeAdmin:string, senhaAdmin:string,nome: string, senha: string, acao: 'adicionar' | 'remover' | 'alterar', novoNome?:string, novaSenha?:string) {
        if(VerificarAdmin(nomeAdmin, senhaAdmin)){
        if (acao === 'adicionar') {
            admin.push({ NomeAdmin: nome, SenhaAdmin: senha });
        } else if(acao === 'remover'){
            admin.splice(admin.findIndex(item => item.NomeAdmin === nome), 1);
        }
        else if(acao ==='alterar'){
            if(novoNome!=undefined){
                const index = admin.findIndex(item => item.NomeAdmin===nome);
                try{
                    admin[index].NomeAdmin=novoNome;
                    
                }
                catch{
    
                }
            }
            if(novaSenha!=undefined){
                const index = admin.findIndex(item => item.NomeAdmin===nome);
                try{
                    admin[index].SenhaAdmin=novaSenha;
                    
                }
                catch{
    
                }
            }

           
        }
        
        fs.writeFileSync('./admin.js', `export const admin: Admin[] = ${JSON.stringify(admin)};`);
    }
    }



}
