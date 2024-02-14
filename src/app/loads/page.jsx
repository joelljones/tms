// (server component) is where we'll fetch data and render our table

import { columns } from './columns';
// import { DataTable } from './data-table';
import DataTable from './data-table';

// async function getData(): Promise<Payment[]> {
async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
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
