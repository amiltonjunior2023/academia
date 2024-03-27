// Função para exibir uma mensagem de boas-vindas quando o chat é aberto
function exibirMensagemInicial() {
    const mensagemInicial = "Olá! Como posso ajudá-lo hoje?";
    addMessage(mensagemInicial, 'bot-message'); // Chama a função addMessage() para exibir a mensagem de boas-vindas
   
}

// Função para alternar a exibição do chat
function toggleChatBox() {
    let chatBox = document.getElementById("chat-box");
    chatBox.style.display = (chatBox.style.display === "none" || chatBox.style.display === "") ? "block" : "none";
}

// Adiciona um ouvinte de evento para capturar quando a tecla Enter é pressionada
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        // Verifica se a tecla pressionada é 'Enter' e não está pressionando a tecla Shift ao mesmo tempo
        const userMessage = userInput.value;
        addMessage(userMessage, 'user-message');
        respondToUser(userMessage);
        userInput.value = '';
    }
});


function enviarMensagem() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user-message'); // Adiciona a mensagem do usuário com o ícone
        respondToUser(userInput);
        document.getElementById("user-input").value = ""; // Limpa o campo de entrada após o envio
    }
}


function addMessage(message, type) {
    const messageDiv = document.createElement('div');
    message = message.replace(/\n/g, '<br>'); // Substitui as quebras de linha por <br>

    // Adiciona um ícone correspondente ao tipo de mensagem
    const icon = document.createElement('span');
    icon.classList.add('icon');
    if (type === 'user-message') {
        icon.innerHTML = '<i class="bi bi-person-fill"</i><br>'; // Adiciona o ícone do usuário
    } else if (type === 'bot-message') {
        icon.innerHTML = '<i class="bi bi-robot"></i><br>'; // Adiciona o ícone do robô
    }
    messageDiv.appendChild(icon);

    messageDiv.innerHTML += message; // Adiciona a mensagem depois do ícone
    messageDiv.classList.add('chat-message', type); // Adiciona uma classe para o tipo de mensagem

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Função para responder às mensagens do usuário
function respondToUser(userMessage) {
     // Adiciona uma classe indicando que o bot está digitando
     chatBox.classList.add('bot-is-typing');
     // Reproduz o som de digitação
     document.getElementById('typing-sound').play();
 
     // Simula um tempo de resposta humano
     const delay = Math.floor(Math.random() * 5000) + 800; // Um atraso aleatório entre 500ms e 2000ms
    
    setTimeout(() => {
        const botResponses = {
           
            'informação': `Qual informação deseja? 
                \n            Musculação 
                \n            Endereço 
                \n            Horário de atendimento 
                \n            Forma de pagamento 
                \n            Planos 
                \n            Melhores exercícios 
                \n            Tipos de lutas 
                \n            Diferencial 
                \n            Equipamentos 
                \n            Pontos positivo 
                \n            Benefícios 
                \n            Contato 
                \n            Qualidade 
                \n            Valores 
                \n            Requisito`,
            'musculação': 'Trabalhamos com todo tipo de musculção, seja ela ganhar massa ou perder massa.',
            'horário de atendimento': 'Nossa academia está aberta de segunda a sexta-feira, das 6h às 22h, e aos sábados das 8h às 18h. Estamos fechados aos domingos.',
            'natação': 'Oferecemos aulas para todas as idades e níveis de habilidade, desde iniciantes até avançados.',
            'endereço': 'Rua Araguaia, número 31, Vila Sarapuí, Duque de Caxias - RJ',
            'forma de pagamento': 'Pix, dinheiro e cartão de crédito',
            'planos': 'Oferecemos uma variedade de planos de associação, incluindo opções mensais, trimestrais e anuais. Entre em contato conosco para obter informações detalhadas sobre os planos disponíveis.',
            'melhores exercícios': 'Nossos instrutores qualificados podem ajudá-lo a desenvolver um programa de treinamento personalizado com exercícios específicos para seus objetivos.',
            'tipos de lutas': 'Oferecemos aulas de uma variedade de estilos de luta, incluindo judô, jiu-jitsu, muay thai e boxe.',
            'diferencial': 'A Academia Vitality destaca-se por ser mais do que um simples espaço de exercícios. Localizada no coração da cidade, é um santuário de transformação, onde os sonhos de um corpo mais forte, uma mente mais resiliente e uma vida mais saudável se concretizam.',
            'requisito': 'Nossas aulas são projetadas para atender a todos os níveis de condicionamento físico, desde iniciantes até avançados. Nossos instrutores estão preparados para ajustar o treinamento de acordo com as necessidades individuais dos alunos.',
            'equipamento':'Em nossas instalações de musculação de última geração, você encontrará uma vasta gama de equipamentos projetados para desafiar e fortalecer seu corpo. Sob a orientação de nossos instrutores especializados, desde novatos até atletas experientes, você irá moldar e tonificar seus músculos, aumentar sua resistência e alcançar os seus objetivos de fitness de forma eficaz e segura.',
            'pontos positivo': ' A Academia Vital se destaca por seu compromisso com a inovação e a excelência em saúde e condicionamento físico. Com uma equipe de profissionais altamente qualificados e uma plataforma digital intuitiva e interativa, oferecemos uma experiência completa de treinamento adaptada às necessidades individuais de cada aluno.',
            'benefícios': 'Ao se tornar membro da Academia Vital, você terá acesso a uma experiência completa de fitness, incluindo instalações de última geração, aulas variadas, treinamentos especializados e uma plataforma digital interativa. Além disso, você fará parte de uma comunidade comprometida com a busca pela saúde e vitalidade, onde poderá compartilhar experiências, motivação e apoio mútuo.',
            'contato': 'Para mais informações sobre a Academia Vitality, você pode entrar em contato conosco através do e-mail amilton9503@gmail.com ou pelo telefone 21965689566. Estamos disponíveis para esclarecer dúvidas, fornecer informações adicionais e ajudá-lo a dar o primeiro passo rumo a uma vida mais saudável e vibrante.',
            'qualidade': 'A Academia Vital adota um rigoroso processo de seleção e capacitação para seus instrutores. Eles passam por uma avaliação criteriosa de suas habilidades técnicas, conhecimento teórico e prática profissional. Além disso, valorizamos características como empatia, comunicação eficaz e capacidade de motivar os alunos. Somente os profissionais altamente capacitados e comprometidos com a excelência são selecionados para integrar nossa equipe.',
            'instrutores': ' O processo de seleção dos instrutores inclui entrevistas, avaliações práticas e, quando necessário, formação e capacitação adicionais. Buscamos profissionais que compartilhem nossa visão de promover um estilo de vida saudável e ativo, alinhados com nossos valores de integridade, respeito e compromisso com o bem-estar dos alunos.',
            'preparação': 'Após a seleção, nossos instrutores recebem treinamento contínuo para garantir que estejam sempre atualizados com as últimas tendências e práticas de fitness. Investimos na qualificação e desenvolvimento de nossa equipe para garantir que eles ofereçam uma experiência enriquecedora e segura aos nossos alunos.',
            'qualificação': 'Nosso objetivo é proporcionar aos nossos alunos uma experiência de fitness excepcional, onde a excelência se une à comunidade. Ao investir na qualificação e desenvolvimento contínuo de nossos instrutores, garantimos que cada aula seja uma experiência enriquecedora e gratificante, contribuindo para o alcance dos objetivos de saúde e bem-estar de nossos alunos.',
            'orientação': ' Os alunos podem ter certeza de que estão sendo orientados por profissionais experientes e dedicados, apaixonados pelo que fazem e comprometidos com o sucesso dos alunos. Nossos instrutores são cuidadosamente selecionados e capacitados para oferecer orientação de alta qualidade em todas as sessões de treinamento, contribuindo para o alcance dos objetivos de saúde e fitness dos nossos alunos.',
            'valores': 'A mensalidade infantil é de R$ 55,00 e a mensalidade para adultos é de R$ 100,00. Para jovens de 14 a 18 anos, a mensalidade é de R$ 70,00, enquanto para adultos é de R$ 140,00.  O plano completo tem mensalidade de R$ 350,00 para jovens de 11 a 17 anos e R$ 550,00 para adultos.  O karatê tem mensalidade de R$ 45,00, o judô de R$ 70,00 e o jiu-jitsu de R$ 95,00.', 
        };

        const userMessageCleaned = userMessage.toLowerCase().trim(); // Remove espaços extras e converte para minúsculas

        const botMessage = botResponses[userMessageCleaned] || 'Desculpe, não entendi.';

        addMessage(botMessage, 'bot-message');

        // Remova a classe indicando que o bot está digitando
        chatBox.classList.remove('bot-is-typing');
    }, delay);
}

// Chama a função para exibir a mensagem inicial assim que o script é carregado
exibirMensagemInicial();













