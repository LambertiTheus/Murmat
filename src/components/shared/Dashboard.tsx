import { ServiceIcon } from "~/components/shared/icons/Service"
import DashboardButton from "./DashboardButton"
import { CashIcon } from "~/components/shared/icons/Cash"

const Dashboard = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex space-x-2">
                <DashboardButton
                    title={"Lançar Serviço"}
                    link={"/lancar-servico"}
                    Icon={ServiceIcon}
                />

                <DashboardButton
                    title={"Meus Serviços"}
                    link={"meus-servicos"}
                    Icon={CashIcon} />
            </div>
        </div>
    )
}

export default Dashboard