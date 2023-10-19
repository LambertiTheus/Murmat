import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import BackgroundWrapper from "~/components/shared/BackgroundWrapper"
import PageHeader from "~/components/shared/PageHeader"


const App: AppType = ({ Component, pageProps }) => {
  const { data } = api.user.userInfo.useQuery()


  return (
    <>
      <PageHeader title={"Sign-in or Log-in"} />
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#95e0fc'
          }
        }}
      >
        <BackgroundWrapper>
          <SignedIn>
            <div className="p-2 flex items-center space-x-2">
              <UserButton />
             {data && <span className="text-black font-bold">Olá, {data.name}!</span>}
            </div>
            <Component {...pageProps} />
          </SignedIn>

          <SignedOut>
            <div className="flex justify-center p-48">
              <SignIn />
            </div>
          </SignedOut>
        </BackgroundWrapper>
      </ClerkProvider>
    </>
  )
}

export default api.withTRPC(App)