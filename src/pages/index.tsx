import { type NextPage } from "next"
import PageHeader from "~/components/shared/PageHeader"
import Dashboard from "~/components/shared/Dashboard"


const Home: NextPage = () => {
  return (
    <>
      <PageHeader title={"Dashboard"} />
      <Dashboard />
    </>
  )
}

export default Home
