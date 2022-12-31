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

  RealizarPagamento = async (produtos: any, usuarioId:any) => {
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
      const items = await Produto.findAll({
        where: {
          idProduto: produtoIds
        }
      }).then((produtos: any[]) => {
        return produtos.map((produto, index) => {
          return {
            title: produto.Nome,
            unit_price: produto.Valor,
            quantity: produtos.find(q => q.idProduto === produto.idProduto).Quantidade,
            description: produto.Descricao
          };
        });
      });
      console.log(items)
      // Crie um objeto preference com os dados dos itens e o valor total da compra
      const preference = {
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
      };
        const payment = await mercadopago.preferences.create(preference);
        const paymentUrl = payment.body.init_point;

// Retorne a paymentUrl
        return paymentUrl;
    }
        }

