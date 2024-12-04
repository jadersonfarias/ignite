import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrderssAmountCard } from './month-orders-amount'
import { DayOrderssAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboaard() {
    return (
        <>
            <Helmet title="Dashboard" />
            <div className="flex flex-col gap-4">
                <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

                <div className='grid grid-cols-4 gap-4'>
                    <MonthRevenueCard />
                    <MonthOrderssAmountCard />
                    <DayOrderssAmountCard />
                    <MonthCanceledOrdersAmountCard />
                </div>

                <div className='grid grid-cols-9 gap-4'>
                      <RevenueChart/>
                      <PopularProductsChart/>
                </div>

            </div>
        </>
    )
}

/* <div className="flex flex-1 items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-white relative p-28">
<div className="">
  <img src={img}alt="Feliz Aniversário" className="max-w-md h-auto shadow-lg rounded-lg"  />
  <div className="absolute inset-0 flex items-start justify-center">
    <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">Feliz Aniversário!</h1>
  </div>
</div>
</div> */
