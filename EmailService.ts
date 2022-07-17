interface  IMmailPara  {
  nome : cadeia ;
  e- mail : cadeia ;
}

interface  IMailMessage  {
  assunto : cadeia ;
  corpo : cadeia ;
  anexo ?: string [ ] ;
}

interface  IMessageDTO  {
  para : IMailTo ;
  mensagem : IMailMessage ;
}

interface  IEmailService  {
  sendMail ( solicitação : IMessageDTO ) : void ;
}

class  EmailService  implementa  IEmailService  {
  sendMail ( { para , mensagem } : IMessageDTO )  {
    consola . log ( `Email enviado para $ { to .name } : ${ message . subject } ` ) ;
  }
}
