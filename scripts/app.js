const main = document.querySelector("#main");
const form = document.querySelector("#pegadados");
const resultado = document.querySelector("#resultado");
let pessoas = new Array();
const arrayVazio = new Array();

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const nome=form.querySelector("#nome");
    const salariobruto=Number(form.querySelector("#salariobruto").value);
    const salariobrutocampo=form.querySelector("#salariobruto");
    if(nome.value==""||salariobruto==0){
        alert("Preencha os campos corrretamente.");
    }
    else{
        let inssPorcento;
        let inssValor;
        let irpfPorcento;
        let irpfValor;
        let salarioLiquido;
        var flagINSS = 0;
        var flagIRPF = 0;
    }

    if(salariobruto<=1751.81){
        inssPorcento = 0.08;
        inssValor = salariobruto*inssPorcento;
        inssPorcento*=100;
    }
    else if(salariobruto>=1751.82 && salariobruto<=2919.72){
        inssPorcento=0.09;
        inssValor = salariobruto*inssPorcento;
        inssPorcento*=100;
    }
    else if(salariobruto>=2919.73 && salariobruto<=5839.45){
        inssPorcento=0.11;
        inssValor = salariobruto*inssPorcento;
        inssPorcento*=100;
    }
    else{
        inssPorcento="Valor fixo";
        inssValor=621.04;
        flagINSS=1;
    }

    if(salariobruto-inssValor<=1903.98){
        irpfPorcento="Isento";
        irpfValor="Isento";
        flagIRPF=1;
    }
    else if(salariobruto-inssValor>=1903.99 && salariobruto-inssValor<=2826.65){
        irpfPorcento=0.075;
        irpfValor=(salariobruto-inssValor)*irpfPorcento;
        irpfValor-=142.8;
        irpfPorcento*=100;
    }
    else if(salariobruto-inssValor>=2826.66 && salariobruto-inssValor<=3751.05){
        irpfPorcento = 0.15;
        irpfValor = (salariobruto-inssValor) * irpfPorcento;
        irpfValor-=354.80;
        irpfPorcento*=100;
    }
    else if(salariobruto-inssValor>=3751.06 && salariobruto-inssValor<=4664.68){
        irpfPorcento = 0.225;
        irpfValor = (salariobruto-inssValor) * irpfPorcento;
        irpfValor-=636.13;
        irpfPorcento*=100;
    }
    else{
        irpfPorcento = 0.275;
        irpfValor = (salariobruto-inssValor) * irpfPorcento; 
        irpfValor-=869.36;
        irpfPorcento*=100;
    }

    if(flagIRPF == 0 && flagINSS == 0){
        irpfPorcento = parseFloat(irpfPorcento);
        inssPorcento = parseFloat(inssPorcento);
        irpfValor = parseFloat(irpfValor);

        irpfPorcento = irpfPorcento.toFixed(1);
        inssPorcento = inssPorcento.toFixed(1);
        irpfValor = irpfValor.toFixed(2);

        salarioLiquido = salariobruto - inssValor - irpfValor;
        }
        else if(flagIRPF == 1){
            inssPorcento = parseFloat(inssPorcento);

            inssPorcento = inssPorcento.toFixed(1);
        
            salarioLiquido = salariobruto - inssValor;
        }
        else if(flagINSS == 1){
            irpfPorcento = parseFloat(irpfPorcento);
            irpfValor = parseFloat(irpfValor);

            irpfPorcento = irpfPorcento.toFixed(1);
            irpfValor = irpfValor.toFixed(2);
        
            salarioLiquido = salariobruto - inssValor - irpfValor;
        }

        inssValor = parseFloat(inssValor);
        inssValor = inssValor.toFixed(2);
        salarioLiquido = salarioLiquido.toFixed(2);

    const pessoa = {
        nome: nome.value,
        salariobruto: salariobruto,
        inssPorcento: inssPorcento,
        inssValor: inssValor,
        irpfPorcento: irpfPorcento, 
        irpfValor: irpfValor,
        salarioLiquido: salarioLiquido
    };

    if(resultado.innerHTML.match("<p>")){
        resultado.innerHTML += `<hr/>
        <p>
        Nome: ${pessoa.nome} |
        Salário Bruto: ${pessoa.salariobruto} |
        Desconto INSS(%): ${pessoa.inssPorcento} |
        Desconto INSS(R$): ${pessoa.inssValor} |
        Desconto IRPF(%): ${pessoa.irpfPorcento} |
        Desconto IRPF(R$): ${pessoa.irpfValor} |
        Salário Líquido: ${pessoa.salarioLiquido} |
        </p>`
    }
    else{
        resultado.innerHTML += `<p>
        Nome: ${pessoa.nome} |
        Salário Bruto: ${pessoa.salariobruto} |
        Desconto INSS(%): ${pessoa.inssPorcento} |
        Desconto INSS(R$): ${pessoa.inssValor} |
        Desconto IRPF(%): ${pessoa.irpfPorcento} |
        Desconto IRPF(R$): ${pessoa.irpfValor} |
        Salário Líquido: ${pessoa.salarioLiquido} |
        </p>
        `;
    }
})
