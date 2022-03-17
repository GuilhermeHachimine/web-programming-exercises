window.addEventListener('load', function () {
    let opcoesEstados = {
        url: "js/estados_brasil.json",
        getValue: "nome",
        list: {
            maxNumberOfElements: 5,
            match: {
                enabled: true
            },
            sort: {
                enabled: true
            }
        },
        placeholder: "Escolha o estado"
    };
    $("#estado").easyAutocomplete(opcoesEstados);

    $("#dinheiro").maskMoney({
        prefix: 'R$ ',
        allowNegative: true,
        thousands: '.',
        decimal: ',',
        affixesStay: false
    });

    $('[name=currency-default]').maskNumber();
    $('[name=currency-data-attributes]').maskNumber();
    $('[name=currency-configuration]').maskNumber({
        decimal: '_',
        thousands: '*'
    });
    $('[name=integer-default]').maskNumber({
        integer: true
    });
    $('[name=integer-data-attribute]').maskNumber({
        integer: true
    });
    $('[name=integer-configuration]').maskNumber({
        integer: true,
        thousands: '_'
    });

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {
        reverse: true
    });
    $('.cnpj').mask('00.000.000/0000-00', {
        reverse: true
    });
    $('.money').mask('000.000.000.000.000,00', {
        reverse: true
    });
    $('.money2').mask("#.##0,00", {
        reverse: true
    });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/,
                optional: true
            }
        }
    });
    $('.ip_address2').mask('099.099.099.099');
    $('.percent').mask('##0,00%', {
        reverse: true
    });
    $('.clear-if-not-match').mask("00/00/0000", {
        clearIfNotMatch: true
    });
    $('.placeholder').mask("00/00/0000", {
        placeholder: "__/__/____"
    });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", {
        selectOnFocus: true
    });
});
