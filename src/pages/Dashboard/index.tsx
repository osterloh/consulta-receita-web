import React, { useState, FormEvent } from 'react';

import api from '../../service/api';

import { Title, Form, Repositories, Error } from './styles';

interface QueryCNPJ {
  cnpj: string;
  nome: string;
  fantasia: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  logradouro: string;
  abertura: string;
  situacao: string;
}

const Dashboard: React.FC = () => {
  const [newSearch, setNewSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [searchEmpresas, setSearchEmpresas] = useState<QueryCNPJ | null>(null);

  async function handleNewSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newSearch) {
      setInputError('Informe o CNPJ da empresa');
      return;
    }

    try {
      await api.get(`${newSearch}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer a90395467accbfd9de6d9cbde3af758d94d70a4c8ec13c2aa9297eed2f498fa5'
        }
      }).then(response => {
        setSearchEmpresas(response.data);
      });

      setNewSearch('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao consultar este CNPJ');
    }
  }

  return (
    <>
      <Title>Pesquisa Receita - CNPJ</Title>

      <Form hasError={!!inputError} onSubmit={handleNewSearch}>
        <input
          value={newSearch}
          onChange={e => setNewSearch(e.target.value)}
          placeholder="Digite o número do CNPJ"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {searchEmpresas && (
        <Repositories>
          <div key={searchEmpresas.cnpj}>
            <span>
              <strong>CNPJ: {searchEmpresas.cnpj}</strong>
            </span>
            <span>
              <strong>Razão Social: {searchEmpresas.nome}</strong>
            </span>
            <span>
              <strong>Nome Fantasia:</strong>
              <p>{searchEmpresas.fantasia}</p>
            </span>
            <span>
              <strong>Cidade:</strong>
              <p>{searchEmpresas.municipio}</p>
            </span>
            <span>
              <strong>Endereço:</strong>
              <p>{searchEmpresas.logradouro}</p>
            </span>
            <span>
              <strong>Bairro:</strong>
              <p>{searchEmpresas.bairro}</p>
            </span>
            <span>
              <strong>UF:</strong>
              <p>{searchEmpresas.uf}</p>
            </span>
            <span>
              <strong>CEP:</strong>
              <p>{searchEmpresas.cep}</p>
            </span>
            <span>
              <strong>Data Cadastro:</strong>
              <p>{searchEmpresas.abertura}</p>
            </span>
            <span>
              <strong>Situação:</strong>
              <p>{searchEmpresas.situacao}</p>
            </span>
          </div>
        </Repositories>
      )}
    </>
  );
};

export default Dashboard;
