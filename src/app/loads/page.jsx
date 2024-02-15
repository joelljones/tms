// (server component) is where we'll fetch data and render our table

import { columns } from './columns';
// import { DataTable } from './data-table';
import DataTable from './data-table';

// async function getData(): Promise<Payment[]> {
async function getData() {
  // Fetch data from your API here.
  return [
    // {
    //   id: '728ed52f',
    //   amount: 100,
    //   status: 'pending',
    //   email: 'm@example.com',
    // },
    {
      id: '728ed52f',
      dateBooked: '01/01/24',
      deliveryDate: '01/03/24',
      driver: 'John Doe',
      loadStatus: 'Booked',
      shippersReceivers: 'Nestle - Costco',
      broker: 'TQL',
      rateCon: '...',
      loadNum: 1,
      commodity: 'chocolate 35F',
      loadRate: 4000,
      addtlComp: 0,
      totalDue: 4000,
      dhMi: 100,
      loadedMi: 1234,
      totalMi: 1334,
      rpmNoDh: 3.24,
      totalRpm: 3,
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
