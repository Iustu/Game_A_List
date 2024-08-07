# MEDIÇÕES DO SLA



## Recuperar jogos da biblioteca do usuário
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

A ser realizada


## Atualizar Cadastro do usuário
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

A ser realizada
