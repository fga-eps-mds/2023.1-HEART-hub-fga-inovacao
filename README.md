
# HEART: HUB FGA Inovação :purple_heart:


Heart é o HUB de Inovação da Universidade de Brasília - Campus Gama, que reúne num só lugar informações referentes aos projetos científicos, pesquisas, pesquisadores, empresas juniores, equipes de competição, empreendedorismo, editais etc. Tudo isso para conectar o que é desenvolvido dentro da Faculdade do Gama com a população brasiliense.



## Stack 

### Front-end

- React

### Web scraping

- Python
- Selenium
- Beautiful Soup

### Hospedagem

- GitHub Pages



## Configuração do Ambiente

Este passo a passo descreve como configurar um ambiente local para rodar a nossa aplicação.

### Pré-requisitos

- Ubuntu 22.04.2 LTS
- Python 3.8 ou superior
- Node.js 16.14.0 ou superior
- Git 2.30.1 ou superior

### Sincronização de hora entre sistemas operacionais num dual boot

Caso você tenha optado por realizar um dual boot (inicialização dupla entre sistemas operacionais) e instalado a versão 22.04.2 LTS do Ubuntu na sua máquina e já possuia alguma versão do Windows instalada, você pode ter observado uma diferença ou dessincronização entre os horários aprensentados em ambos os sistemas operacionais.

Para corrigir a dessincronização de hora entre sistemas operacionais em um dual boot, você precisa configurar o relógio do sistema para interpretar a hora do relógio em relação ao fuso horário local do sistema. 

O fuso horário local do sistema é a configuração que determina a diferença de tempo entre o horário do sistema e o [Tempo Universal Coordenado](https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado) (UTC), que é o padrão de tempo de referência global utilizado como base para sincronização de horários em todo o mundo. Cada região do mundo tem sua própria diferença de tempo em relação ao UTC, que é medida em horas e minutos. Por exemplo, o fuso horário do Brasil é UTC-3, o que significa que o horário do Brasil está três horas atrasado em relação ao UTC. Já o fuso horário de Tóquio é UTC+9, ou seja, o horário local está nove horas à frente do UTC. Isso significa que, após a configuração, a hora mostrada no relógio do sistema será relativa ao fuso horário local do sistema, e não ao UTC. E isso pode ser feito executando o seguinte comando no terminal:

```
timedatectl set-local-rtc 1
```

Depois de executar este comando, reinicie o computador para que as alterações tenham efeito. Isso deve corrigir a dessincronização da hora entre os sistemas operacionais.

### Instalação do Python

O Python já vem instalado por padrão no Ubuntu, mas é recomendável instalar a versão mais recente. Para instalar o Python 3.8, abra o terminal e execute o seguinte comando:
```
sudo apt-get update
sudo apt-get install python3.8
```

### Criação e ativação do Ambiente Virtual

O ideal é sempre trabalhar com ambientes virtuais para gerenciar as dependências de um projeto Python, e isso inclui as bibliotecas que serão utilizadas para realizar o web scraping. 

A principal vantagem de trabalhar com ambientes virtuais é que podemos isolar as dependências do nosso projeto em um ambiente separado, sem interferir no sistema operacional ou em outros projetos Python que possam estar em execução na máquina que estivermos utilizando.

Para criar e ativar um ambiente virtual, siga estes passos:

1. Abra o terminal pressionando "Ctrl + Alt + T" e navegue até o diretório do seu projeto.

2. Instale o pacote virtualenv usando o seguinte comando:

```
sudo apt-get install virtualenv
```

3. Crie um ambiente virtual com o seguinte comando:

```
virtualenv myenv
```

Esse comando irá criar um ambiente virtual com o nome myenv.

5. Ative o ambiente virtual com o seguinte comando:

```
source myenv/bin/activate
```

Após executar este comando, você deve ver o nome do ambiente virtual no prompt do terminal.

Agora você pode instalar as bibliotecas que serão utilizadas no projeto dentro do ambiente virtual.

### Instalação da biblioteca Selenium

```
pip install selenium
```

Esse comando irá instalar a biblioteca Selenium no ambiente virtual myenv.


### Instalação da biblioteca Beautiful Soup

Para instalar a biblioteca Beautiful Soup, execute o seguinte comando no terminal:

```
pip install beautifulsoup4
```

Esse comando irá instalar a biblioteca Selenium no ambiente virtual myenv.


### Executando o projeto localmente

Siga as etapas abaixo para executar o projeto localmente:

Clone o repositório para o seu ambiente de desenvolvimento local:

```
git clone https://github.com/fga-eps-mds/2023.1-HEART-hub-fga-inovacao.git
```

Navegue até o diretório do projeto, mais especificamente na pasta "frontend":

```
cd 2023.1-HEART-hub-fga-inovacao/frontend
```

Instale as dependências do front-end. Certifique-se de ter o Node.js instalado. No diretório raiz do projeto, execute o seguinte comando:

```
npm install
```

Inicie o servidor de desenvolvimento:

```
npm start
```

Isso iniciará o servidor de desenvolvimento e o projeto poderá ser acessado em http://localhost:3000.


### Configuração do GitHub Pages

Para configurar o GitHub Pages, acesse as configurações do seu repositório no GitHub e ative o GitHub Pages para a branch main. Em seguida, selecione o diretório /docs como diretório de publicação.



## Autores

- [@algorithmorphic](https://github.com/algorithmorphic)
- [@esmsena](https://github.com/esmsena)
- [@izabellaalves](https://github.com/izabellaalves)
- [@Lucas13032003](https://github.com/Lucas13032003)
- [@LucasOliveiraDiasMarquesFerreira](https://github.com/LucasOliveiraDiasMarquesFerreira)
- [@lucassouzs](https://github.com/lucassouzs)
- [@Maryyscreuza](https://github.com/Maryyscreuza)


