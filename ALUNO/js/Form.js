class Form {
  
  constructor() {
    
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  
  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

 
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //função de clique do botão
  // Um objeto da classe de jogador deve chamar um método addPlayer() para adicionar informações no
  //banco de dados e um updateCount() para aumentar ocampo ‘playerCount’ no bd
  handleMousePressed() {
    this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
    var message = `
    Olá ${this.input.value()}
    </br>espere o outro jogador entrar...`;
    this.greeting.html(message);
      // playerCount inicia com 0, Quando o primeiro jogador entrar, ele será aumentado para 1
      //quando o segundo jogador entrar, ele aumentará para 2.
      
      //O nome do jogador está em player.name.
      //this.input.value() lê a entrada do usuário no nome do jogo do jogador
      
      //atribuímos o playerCount a player.index, que é usado como um id único para os jogadores
      
      //chamando método que armazenará todos os dados no bd
      
      //atualizando contagem para o bd simultaneamente
      
    });
  }

  
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}