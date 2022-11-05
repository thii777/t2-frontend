import React from "react";
import Card from "./Card";
import Container from "./Container";

import maxresdefault from "../../public/img/maxresdefault.png";
import saqueniver from "../../public/img/saqueniver.png";

export default function ProductsAndService() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 md:justify-around">
            <Card
              title="Crédito Consignado"
              paragraph="O Empréstimo Consignado é um tipo de crédito pessoal em que o pagamento das parcelas é descontado diretamente no seu contracheque, holerite ou benefício do INSS."
              imageLink={maxresdefault}
              route='/payroll-loans'
            />
            

            <Card
              title="Antecipação saque aniversario FGTS"
              paragraph="É um empréstimo que permite a antecipação do valor de até 5 (cinco) parcelas de Saque Aniversário do FGTS."
              imageLink={saqueniver}
              route='/payroll-loans'
            />
          </div>
        </div>
      </Container>
    </>
  );
}
