import React, { useState } from 'react';
import InputMask from 'react-input-mask';


const Form = () => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [idade, setIdade] = useState();
    const [cidade, setCidade] = useState();
    const [profissao, setProfissao] = useState();
    const [cpf, setCpf] = useState();
    const [numero, setNumero] = useState();

    function handleNome(e) {
        setNome(e.target.value);
    }

    function handleSobrenome(e) {
        setSobrenome(e.target.value);
    }

    function handleIdade(e) {
        setIdade(e.target.value);
    }

    function handleCidade(e) {
        setCidade(e.target.value);
    }

    function handleProfisao(e) {
        setProfissao(e.target.value);
    }

    function handleCpf() {
        var cpf = document.getElementById('cpf').value;
        var cpfFormatado = cpf.replace(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/)
        setCpf(cpfFormatado);
    }

    function handleNumero() {
        var num = document.getElementById('num').value;
        var numFormatado = num.replace(/(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/)
        setNumero(numFormatado);
    }

    return (
        <div>
            <form>
                Nome: <input value={nome} onChange={handleNome}></input>
                Sobrenome: <input value={sobrenome} onChange={handleSobrenome}></input>
                Idade: <input type="number" value={idade} onChange={handleIdade}></input>
                Cidade: <input value={cidade} onChange={handleCidade}></input>
                Profissão: <input value={profissao} onChange={handleProfisao}></input>
                <br/>
                CPF/CNPJ: <input type="number" id="cpf" maxlength="14" value={cpf} onChange={handleCpf}></input>
                Telefone: <input type="tel" id="num" placeholder="(99) 99999-9999" maxlength="11"  pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" value={numero} onChange={handleNumero}></input>
             </form>
        </div>
    )
}

export default Form;
