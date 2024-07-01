import { BasketProvider } from "./modules/BasketContext"

const Providers = ({children}) => {
  return (
    <BasketProvider>
        {children}
    </BasketProvider>
  )
}

export default Providers