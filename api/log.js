export default function handler(req, res) {
    if(req.method != 'POST') {
        console.log('Method not allowed.');
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`)
    }

    const { login, password } = req.body;
    console.log(`USER: ${login}, PASS: ${password}`);
    res.status(200).json({ message: 'Dados recebidos com sucessso' })
}