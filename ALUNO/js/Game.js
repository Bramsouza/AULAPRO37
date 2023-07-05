class Game {
  constructor() {}

  //Estado do Jogo
  getState() {
    // .ref() - passa a localização do campo ‘gameState’ do banco de dados 
    
    //.on() - lê o valor do campo ‘gameState’ e salva na variável global gameState
    
    
  }
   
  start() {
    form = new Form();
    form.display();

    player = new Player();
    //Inserindo var para receber a função de contagem dos estados
    

    //Criando os dois carros
    
  }

  //método update() para atualizar gameState
  update(state) {
    
  }

  //método para mostrar a pista e os carros de corrida. 
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    // exibe o terreno apenas depois que as informações do jogador forem recebidas, portanto,
    //usamos aqui a condição if
    
  }
}
