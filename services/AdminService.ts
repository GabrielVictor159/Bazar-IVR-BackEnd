
import VerificarAdmin from './VerificarAdmin';

export class AdminService {
    constructor() { }

    Login = (Nome: String, Senha: String) => {
      const resposta =  VerificarAdmin(Nome, Senha)
      return resposta

    }

    
   



}
