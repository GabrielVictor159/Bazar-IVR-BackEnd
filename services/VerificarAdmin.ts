import fs from 'fs';

export default function VerificarAdmin(nome: string, senha: string): boolean {
  const data = fs.readFileSync('../services/admin.json', 'utf8');

        // Converte o conteúdo do arquivo para um objeto JavaScript
  let admin = JSON.parse(data);
  return admin.some((a: { NomeAdmin: string; SenhaAdmin: string; }) => a.NomeAdmin === nome && a.SenhaAdmin === senha);
}
