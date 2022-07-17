import  {  Request ,  Response  }  from  'express' ;
importar  EmailService  de  '../services/EmailService' ;

const  usuários  =  [
  {  nome : 'ezequiel' , e-  mail : 'ezequielrobaina13@gmail.com'  } ,
] ;

exportação  padrão  {
   índice assíncrono ( req : Request ,  res : Response )  {
    retorno  rs . json ( usuários ) ;
  } ,

  async  create ( req : Request ,  res : Response )  {
    const  emailService  =  new  EmailService ( ) ;

    serviço de e -mail . sendMail ( {
      para : { 
        nome : 'ezequiel robaina' , 
        e- mail : 'ezequielrobaina13@gmail.com'
      } ,
      mensagem : { 
        assunto : 'Bem-vindo ao sistema' , 
        corpo : 'Seja bem-vindo'
      }
    } ) ;

    retorno  rs . enviar ( ) ;
  }
} ;
