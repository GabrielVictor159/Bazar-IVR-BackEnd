
import fs from 'fs';
import VerificarAdmin from './VerificarAdmin';

export class AdminService {
    constructor() { }

    Login = (Nome: string, Senha: string) => {
      const resposta =  VerificarAdmin(Nome, Senha)
      return resposta

    }

    
    alterarAdmin(nomeAdmin:string, senhaAdmin:string,nome: string, senha: string, acao: 'adicionar' | 'remover' | 'alterar', novoNome?:string, novaSenha?:string) {
        const data = fs.readFileSync('admin.json', 'utf8');

        // Converte o conteúdo do arquivo para um objeto JavaScript
        let admin = JSON.parse(data);
      
      
        if(VerificarAdmin(nomeAdmin, senhaAdmin)){
        if (acao === 'adicionar') {
            admin.push({ NomeAdmin: nome, SenhaAdmin: senha });
        } else if(acao === 'remover'){
            admin.splice(admin.findIndex((item: { NomeAdmin: string; }) => item.NomeAdmin === nome), 1);
        }
        else if(acao ==='alterar'){
            if(novoNome!=undefined){
                const index = admin.findIndex((item: { NomeAdmin: string; }) => item.NomeAdmin===nome);
                try{
                    admin[index].NomeAdmin=novoNome;
                    
                }
                catch{
    
                }
            }
            if(novaSenha!=undefined){
                const index = admin.findIndex((item: { NomeAdmin: string; }) => item.NomeAdmin===nome);
                try{
                    admin[index].SenhaAdmin=novaSenha;
                    
                }
                catch{
    
                }
            }

           
        }
        
        fs.writeFileSync('./admin.ts', `export const admin: Admin[] = ${JSON.stringify(admin)};`);
    }
    }



}
