const cartao = document.getElementById('numero');
const validade = document.getElementById('validade');
const cvv = document.getElementById('cvv');
const anoMaximo = new Date().getFullYear() + 10;

IMask(cartao,{
    mask: '0000 0000 0000 0000'
});

IMask(validade,{
    mask: '00/00',
    blocks: {
        1: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
        },
        2: {
            mask: IMask.MaskedRange,
            from: new Date().getFullYear().toString().substring(2),
            to: anoMaximo.toString().substring(2),
        }
    },
});

IMask(cvv,{
    mask: '0000'
});
