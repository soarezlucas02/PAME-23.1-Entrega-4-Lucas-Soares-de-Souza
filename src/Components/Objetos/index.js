import Pao from '../../Assets/pao.png';
import Pao2 from '../../Assets/pao2.png';
import Pao3 from '../../Assets/pao3.png';
import Pao4 from '../../Assets/pao4.png';

import bloqueado from '../../Assets/bloqueado.png'
import apagar from '../../Assets/lixo.png'
import imagemEncomenda from '../../Assets/entrega.png'

export const objetos = [
    {
      nome: "Pão Brioche de Canela",
      quantidadeEmEstoque: 10,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Chocolate",
      quantidadeEmEstoque: 15,
      imageUrl: Pao2,
    },
    {
      nome: "Pão Brioche de Morango",
      quantidadeEmEstoque: 5,
      imageUrl: Pao3,
    },
    {
      nome: "Pão Brioche de Amêndoa",
      quantidadeEmEstoque: 8,
      imageUrl: Pao4,
    },
    {
      nome: "Pão Brioche de Baunilha",
      quantidadeEmEstoque: 12,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Caramelo",
      quantidadeEmEstoque: 7,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Framboesa",
      quantidadeEmEstoque: 3,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Limão",
      quantidadeEmEstoque: 9,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Maçã",
      quantidadeEmEstoque: 6,
      imageUrl: Pao,
    },
    {
      nome: "Pão Brioche de Nozes",
      quantidadeEmEstoque: 11,
      imageUrl: Pao,
    }
  ];

  export const encomendas = [
    {
      ID: 1111,
      Situacao: 'Solicitada',
      imageUrl: imagemEncomenda,
      Apagar: bloqueado,
    },
    {
      ID: 2222,
      Situacao: 'A Caminho',
      imageUrl: imagemEncomenda,
      Apagar: bloqueado,
    },
    {
      ID: 3333,
      Situacao: 'Entregue',
      imageUrl: imagemEncomenda,
      Apagar: apagar,
    }
  ]