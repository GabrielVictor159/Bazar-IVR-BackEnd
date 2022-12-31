import Keys from "../Keys";
import Produto from "../models/Produto";
import Usuarios from "../models/Usuarios";

const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: Keys.mercadoPagoAcessToken,
  sandbox: true
});

export class CompraService {
  constructor() {}

  RealizarPagamento = async (produtos: any, usuarioId:any, endereco: any) => {
    // Verifique se o objeto produtos possui a propriedade idProduto
    const usuario = Usuarios.findByPk(usuarioId)
    if(usuario===null){
        return "id do usuario invalido"
    }
    
    
      let produtoIds:any[] = [];
       produtos.map((value: { idProduto: any; })=>{
        
          produtoIds.push(value.idProduto)
        
       }) 
       console.log(produtoIds)
      // Crie um array de objetos item usando o método map e atribua o resultado a uma variável
      const localizeQuantidade = (item:any)=>{
  
        for(let i=0; i<produtos.length; i++){
          if(item.idProduto ===produtos[i].idProduto){
            return produtos[i].Quantidade
          }
        
        }
        return 1
      }
      const items = await Produto.findAll({
        where: {
          idProduto: produtoIds
        }
      }).then((response: any[]) => {
        return response.map((produto, index) => {
          return {
            title: produto.Nome,
            unit_price: produto.Valor,
            quantity: localizeQuantidade(produto),
            description: produto.Descricao
          };
        });
      });
      console.log(items)
        const preference = {
          notification_url: `${Keys.link}NotificacaoCompra`,
          items: items,
          payer: {
            name: usuario.FirstName,
            surname: usuario.LastName,
            email: usuario.Email,
          },
          external_reference: produtos.referencia,
          back_urls: {
            success: `${Keys.link}SucessoDeCompra`,
            failure: `${Keys.link}FalhaDeCompra`,
            pending: `${Keys.link}PagamentoPendente`,
          },
          auto_return: `approved`,
          shipping: {
            receiver_address: {
              zip_code: endereco.cep,
              street_name: endereco.rua,
              street_number: endereco.numero,
              neighborhood: endereco.bairro,
              city: endereco.cidade,
              state: endereco.estado
            }
          }
        };
          const payment = await mercadopago.preferences.create(preference);
          const paymentUrl = payment.body.init_point;
        
        // Retorne a paymentUrl
          return paymentUrl;
        }
        
        }

