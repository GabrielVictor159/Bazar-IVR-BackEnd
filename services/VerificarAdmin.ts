import { admin } from "./Admin";

export default function VerificarAdmin(nome: string, senha: string): boolean {
  return admin.some((a) => a.NomeAdmin === nome && a.SenhaAdmin === senha);
}
