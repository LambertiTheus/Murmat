import { Seguradora, Viatura } from "@prisma/client"
import Forms from "~/components/shared/Forms"
import InputField from "~/components/shared/InputField"
import Listbox from "~/components/shared/Listbox"
import PageHeader from "~/components/shared/PageHeader"
import { useState } from 'react'

const viaturas = [
  { label: "M110", value: Viatura.M110 },
  { label: "M183", value: Viatura.M183 }

]

const seguradoras = [
  { label: "Porto", value: Seguradora.PORTO },
  { label: "Azul", value: Seguradora.AZUL },
  { label: "Itaú", value: Seguradora.ITAU },
  { label: "Mitsui", value: Seguradora.MITSUI },
  { label: "Porsche", value: Seguradora.PORSCHE }
]

const LancarServico = () => {
  const [selectedSeguradora, setSelectedSeguradora] = useState('');
  const [selectedViatura, setSelectedViatura] = useState('');
  const [ordemServico, setOrdemServico] = useState('');
  const [servico, setServico] = useState('');
  const [placaVeiculo, setPlacaVeiculo] = useState('');


  return (
    <PageHeader title="Lançar Serviço" >
      <div className="flex justify-center">
        <Forms>
          <Listbox
            title={"Seguradora"}
            placeholder={"Seguradora"}
            required={true}
            value={selectedSeguradora}
            onChange={(value) => setSelectedSeguradora(value)}
            options={seguradoras}
          />

          <Listbox
            title={"Viatura"}
            placeholder={"Viatura"}
            required={true}
            value={selectedViatura}
            onChange={(value) => setSelectedViatura(value)}
            options={viaturas}
          />

          <InputField
            title={"Ordem de Serviço"}
            placeholder={"Ordem de Serviço"}
            onChange={setOrdemServico}
            required={true}
            value={ordemServico}
            mask={"23-9999999"}
          />

          <InputField
            title={"Serviço"}
            placeholder={"Serviço"}
            onChange={setServico}
            required={true}
            value={servico}
          />

          <InputField
            title={"Placa do Veículo"}
            placeholder={"Placa do Veículo"}
            onChange={setPlacaVeiculo}
            required={true}
            value={placaVeiculo}
            mask={"aaa-9*99"}
          />

        </Forms>
      </div>
    </PageHeader>
  )
}

export default LancarServico