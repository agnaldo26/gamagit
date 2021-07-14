import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [urlRepositories, setUrlRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
        } else {
            history.push('/');
        }

        let repositoriesUrl = localStorage.getItem('urlRepositories');
        repositoriesUrl = JSON.parse(repositoriesUrl);
        setUrlRepositories(repositoriesUrl);
        localStorage.clear();
    }, [])
    return (
        <S.Container>
            <S.Title>Repositórios: </S.Title>
            <S.List>
                {repositories.map((repository) => {
                    for (let i = 0; i < urlRepositories.length; i++) {
                        return (
                            <S.Ancora href={urlRepositories[i]} target="_blank"><S.ListItem> {repository} </S.ListItem></S.Ancora>
                        )
                    }

                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}