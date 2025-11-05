const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const os = require('os'); // Módulo para obter informações do sistema operacional

const execPromise = util.promisify(exec);

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/gerar-proposta', async (req, res) => {
    console.log('Recebido pedido para gerar proposta...');
    const { transcricao } = req.body;

    if (!transcricao) {
        return res.status(400).json({ error: 'Transcrição não fornecida.' });
    }

    try {
        // --- CÓDIGO MELHORADO ---
        // Define o comando correto ('type' para Windows, 'cat' para outros)
        const catCommand = os.platform() === 'win32' ? 'type' : 'cat';
        
        // Define o comando do Gemini usando npx para garantir que seja encontrado
        const geminiCommand = 'npx https://github.com/google-gemini/gemini-cli';
        // --- FIM DA MELHORIA ---

        fs.writeFileSync('transcricao_temp.txt', transcricao);
        console.log('1/5 - Transcrição salva.');

        const comandoExtracao = `${catCommand} transcricao_temp.txt | ${geminiCommand} -p prompts/1_extrair_dados_brutos.md > dados_proposta.json`;
        await execPromise(comandoExtracao);
        console.log('2/5 - Dados extraídos para JSON.');

        const dadosPropostaRaw = fs.readFileSync('dados_proposta.json');
        const dadosPropostaJson = JSON.parse(dadosPropostaRaw);
        console.log('3/5 - Diagnóstico lido para validação.');

        const comandoGeracao = `${catCommand} dados_proposta.json | ${geminiCommand} -p prompts/2_gerar_proposta_html.md > resultado_final.json`;
        await execPromise(comandoGeracao);
        console.log('4/5 - Artefatos HTML gerados.');

        const resultadoFinalRaw = fs.readFileSync('resultado_final.json');
        const resultadoFinalJson = JSON.parse(resultadoFinalRaw);
        console.log('5/5 - Enviando resultado completo de volta.');
        
        res.json({
            diagnostico: dadosPropostaJson,
            paginaPrincipalHTML: resultadoFinalJson.paginaPrincipalHTML,
            paginaContratoHTML: resultadoFinalJson.paginaContratoHTML
        });

    } catch (error) {
        console.error('--- ERRO DETALHADO NO SERVIDOR ---');
        console.error(error); // Isso vai imprimir o erro completo no terminal
        res.status(500).json({ error: 'Falha ao executar os comandos do Gemini. Verifique o log do terminal do servidor.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Cozinha aberta e pronta para receber pedidos na porta ${PORT}`);
    console.log('Abra o arquivo index.html no seu navegador para começar.');
});