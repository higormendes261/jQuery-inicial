
//Mudando a cor do primeiro titulo 
$(function(){
    $('.botao-titulo1').click(function(){
        $('.titulo1').css("color", "red");
    });
});

//Efeito fade (retirar conteudo da pagina)

$(function(){
    $('.botao-mensagem1').click(function(){
        $('.mensagem1').fadeOut();
        $('.botao-mensagem1').fadeOut();
    });
});

//Efeito fade com delay com retorno do conteudo

$(function(){
    $('.botao-mensagem2').click(function(){
        $('.mensagem2').fadeOut();
        $('.botao-mensagem2').fadeOut(); //Pode ser colocado o argumento 'slow/fast' para alterar a suavidade
        $('.mensagem2').delay(3000);
        $('.botao-mensagem2').delay(3000);
        $('.mensagem2').fadeIn();
        $('.botao-mensagem2').fadeIn();
    });
});

//Exibindo mensagem ("de confirmação") no HTML
$('.send-text').click(function(){
    $('.mensagem')
        .text("Nome enviado com sucesso!")
        .css('border', '1px solid black')
        .delay(2000)
        .fadeOut('fast');
});


//Alterando o css de todos os paragrafos
$(function(){
    $('.alterar-fundo').click(function(){
        $('p').css("background-color", "red");
    });
});

//Carrosel
$(function(){
    $('.n1').click(function(){
        $('.numero1').show();
        $('.numero2').hide();
        $('.numero3').hide();
        $('.numero4').hide();
    });

    $('.n2').click(function(){
        $('.numero1').hide();
        $('.numero2').show();
        $('.numero3').hide();
        $('.numero4').hide();
    });

    $('.n3').click(function(){
        $('.numero1').hide();
        $('.numero2').hide();
        $('.numero3').show();
        $('.numero4').hide();
    });

    $('.n4').click(function(){
        $('.numero1').hide();
        $('.numero2').hide();
        $('.numero3').hide();
        $('.numero4').show();
    });
});