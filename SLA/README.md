# MEDIÇÕES DO SLA



## Buscar jogos da biblioteca do usuário
Tipo de operação: leitura

Arquivos envolvidos (lista de arquivos envolvidos na implementação):

jogoPossuidoController.java 
-       ...\com.example.GameAlist\jogo_possuido\jogoPossuidoController.java

jogoPossuidoModel.java 
-       ...\com.example.GameAlist\jogo_possuido\jogoPossuidoModel.java
jogoJogadoModel.java 
-       ...\com.example.GameAlist\jogo_possuido\jogoJogadoModel.java

jogoPossuidoService.java 
-       ...\com.example.GameAlist\jogo_possuido\jogoPossuidoService.java

jogoPossuidoRepository.java 
-       ...\com.example.GameAlist\jogo_possuido\jogoPossuidoRepository.java

### MEDIÇÃO 1

Data da medição: 07/08/2024

Descrição das configurações: 
- Servidor local Apache Tomcat
- Cluster MongoDB do Atlas

Testes de carga (SLA):
- latência: 95º percentil - 34,8 ms
- vazão: 19 requisições/s -- 1742 requisições ao longo do teste
- concorrência (limite de requisições simultâneas): 18 requisições


GRÁFICOS comparativos das medições feitas:
- Os gráficos estão na pasta "primeiro-teste", que possui arquivos PDF com as métricas e gráficos do teste de ambos os serviços.
    
Potenciais gargalos do sistema:
- Pela necessidade de recuperar os dados dos jogos armazenados na base de dados, a comunicação com a instância em cloud do MongoDB pode gerar gargalo pela busca no mesmo, a qual possibilita ao usuário recuperar os jogos da sua biblioteca na aplicação GameA_list.

### MEDIÇÃO 2

#### Data da medição: 21/08/2024

#### Testes de carga (SLA):
- latência: 95º percentil - 36,6 ms
- vazão: 19 requisições/s -- 1734 requisições ao longo do teste
- concorrência (limite de requisições simultâneas): 18 requisições

#### Melhorias: 
Tentamos melhorar o tempo de resposta do banco de dados MongoDB mudando o local de seu servidor em nuvem de Ohio para São Paulo, mas o resultado não foi o esperado - pela medição, o tempo de resposta aumentou.


## Atualizar dados do usuário
Tipo de operação: atualização

Arquivos envolvidos (lista de arquivos envolvidos na implementação):

usuarioController.java 
-       ...\com.example.GameAlist\usuario\usuarioController.java

usuarioModel.java 
-       ...\com.example.GameAlist\usuario\usuarioModel.java

usuarioService.java 
-       ...\com.example.GameAlist\usuario\usuarioService.java

usuarioRepository.java 
-       ...\com.example.GameAlist\usuario\usuarioRepository.java

usuario.java 
-       ...\com.example.GameAlist\usuario\DTO\usuario.java
usuarioModelMapper.java 
-       ...\com.example.GameAlist\usuario\DTO\Mappers\usuarioModelMapper.java

### MEDIÇÃO 1

Data da medição: 07/08/2024

Descrição das configurações:
 - Servidor local Apache Tomcat
 - Servidor local MySQL

Testes de carga (SLA):
- latência: 95º percentil - 14,7 ms
- vazão: 20 requisições/s -- 1.780 requisições ao longo do teste
- concorrência (limite de requisições simultâneas): 19 requisições


GRÁFICOS comparativos das medições feitas:
- Os gráficos estão na pasta "primeiro-teste", que possui arquivos PDF com as métricas e gráficos do teste de ambos os serviços.


Potenciais gargalos do sistema:
- O serviço realiza UPDATE na base de dados relacional, com a conexão com o banco de dados MySQL. Como o servidor do Banco de dados está no mesmo domínio que o backend, o tempo de resposta acaba sendo melhor do que a conexão com o banco de dados NoSQL. Um possível gargalo da implementação estaria na própria estrutura de hardware do domínio que tanto o backend quanto o banco SQL utilizam.

### MEDIÇÃO 2

#### Data da medição: 21/08/2024

#### Testes de carga (SLA):
- latência: 95º percentil - 15 ms
- vazão: 20 requisições/s -- 1780 requisições ao longo do teste
- concorrência (limite de requisições simultâneas): 19 requisições

#### Melhorias:
Não houve melhorias no processo de escrita na base de dados local. O tempo e os resultados obtidos foram muito parecidos. É possível notar que, nesse caso, como tanto a base quanto a aplicação funcionam on premise, a conexão entre elas é boa, permitindo um número mais alto de requisições, e concorrência de requisições, em comparação com a conexão da aplicação com a base de dados na nuvem (Cluster MongoDB do Atlas).

# Gráficos do primeiro teste de carga do serviço "Buscar jogos da biblioteca do usuário"

![Caso não consiga ver, entre na pasta "Primeiros_Testes"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Primeiros_Testes/BuscarJogosDaBiblioteca_Teste11.png)

![Caso não consiga ver, entre na pasta "Primeiros_Testes"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Primeiros_Testes/BuscarJogosDaBiblioteca_Teste12.png)

# Gráficos do segundo teste de carga do serviço "Buscar jogos da biblioteca do usuário"

![Caso não consiga ver, entre na pasta "Segundo_Teste"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Segundo_Teste/BuscarJogosDaBiblioteca_Teste21.png)

![Caso não consiga ver, entre na pasta "Segundo_Teste"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Segundo_Teste/BuscarJogosDaBiblioteca_Teste22.png)

# Gráficos do primeiro teste de carga do serviço "Atualizar dados do usuário"

![Caso não consiga ver, entre na pasta "Primeiros_Testes"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Primeiros_Testes/AtualizarDadosDoUsuario_Teste11.png)

![Caso não consiga ver, entre na pasta "Primeiros_Testes"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Primeiros_Testes/AtualizarDadosDoUsuario_Teste12.png)

# Gráficos do segundo teste de carga do serviço "Atualizar dados do usuário"

![Caso não consiga ver, entre na pasta "Segundo_Teste"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Segundo_Teste/AtualizarDadosDoUsuario_Teste21.png)

![Caso não consiga ver, entre na pasta "Segundo_Teste"](https://github.com/Iustu/Game_A_List/blob/main/SLA/Segundo_Teste/AtualizarDadosDoUsuario_Teste22.png)

