import Router from 'express'

const router = Router()

router.get('/cliente' ,(req, res) => {
    res.send('Listando os dados')
})
router.post('/cliente' ,(req, res) => {
    res.send('Criando novos dados')
})
router.get('/cliente/:id' ,(req, res) => {
    const { id } = req.params
    res.send(`Este é o cliente ${id}`)
})
router.delete('/cliente/:id' ,(req, res) => {
    const { id } = req.params
    res.send(`Chegou os dados ${id}`)
});

export default router