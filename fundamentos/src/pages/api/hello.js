// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) { // em paranmetro temos a requisição e a resposta
  res.status(200).json(
    {
     name: 'Teste API',
     metodo: req.method
    })
  
}
