// (server component) is where we'll fetch data and render our table

import { columns } from './columns';
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

    // BOOKED
    {
      id: '728ed52k',
      dateBooked: '01/10/24',
      deliveryDate: '01/12/24',
      driver: 'Jane Doe',
      loadStatus: 'Booked',
      shippersReceivers: 'North Baker Flat - Costco',
      broker: 'TQL',
      rateCon: '',
      loadNum: 16002297,
      commodity: 'apples 36F',
      loadRate: 1200,
      addtlComp: 0,
      totalComp: 1200,
      dhMi: 153,
      loadedMi: 158,
      totalMi: 311,
      rpmNoDh: 7.59,
      totalRpm: 3.85,
    },
    {
      id: '728ed52j',
      dateBooked: '01/10/24',
      deliveryDate: '01/12/24',
      driver: 'John Doe',
      loadStatus: 'Booked',
      shippersReceivers: 'Darigold - Great Lakes Cheese',
      broker: 'LoadSmart',
      rateCon: '',
      loadNum: 937656,
      commodity: 'dairy 34F',
      loadRate: 2600,
      addtlComp: 0,
      totalComp: 2600,
      dhMi: 183,
      loadedMi: 799,
      totalMi: 982,
      rpmNoDh: 3.25,
      totalRpm: 2.65,
    },

    // @ P/U
    {
      id: '728ed52i',
      dateBooked: '01/10/24',
      deliveryDate: '01/12/24',
      driver: 'Jane Smith',
      loadStatus: '@ P/U',
      shippersReceivers: 'US Cold Storage - Lineage Logistics',
      broker: 'Integrity Express',
      rateCon: '',
      loadNum: 1012518,
      commodity: 'frozen broccoli 10F',
      loadRate: 2850,
      addtlComp: 250,
      totalComp: 3100,
      dhMi: 248,
      loadedMi: 787,
      totalMi: 1035,
      rpmNoDh: 3.62,
      totalRpm: 2.75,
    },

    // IN TRANSIT
    {
      id: '728ed52h',
      dateBooked: '01/08/24',
      deliveryDate: '01/12/24',
      driver: 'John Smith',
      loadStatus: 'In Transit',
      shippersReceivers: 'Americold - Preferred Freezer Svcs',
      broker: 'Garrison Inc',
      rateCon: '',
      loadNum: 874775,
      commodity: 'frozen food 0F',
      loadRate: 5200,
      addtlComp: 0,
      totalComp: 5200,
      dhMi: 90,
      loadedMi: 2255,
      totalMi: 2345,
      rpmNoDh: 2.31,
      totalRpm: 2.22,
    },

    // @ DELIVERY
    {
      id: '728ed52g',
      dateBooked: '01/08/24',
      deliveryDate: '01/10/24',
      driver: 'Jane Doe',
      loadStatus: '@ Delivery',
      shippersReceivers: 'Darigold - Great Lakes Cheese',
      broker: 'LoadSmart',
      rateCon: '',
      loadNum: 9379118,
      commodity: 'dairy 34F',
      loadRate: 2600,
      addtlComp: 0,
      totalComp: 2600,
      dhMi: 45,
      loadedMi: 799,
      totalMi: 844,
      rpmNoDh: 3.25,
      totalRpm: 3.08,
    },

    // INVOICED
    {
      id: '728ed52f',
      dateBooked: '01/08/24',
      deliveryDate: '01/10/24',
      driver: 'John Doe',
      loadStatus: 'Invoiced',
      shippersReceivers: 'Mission Produce - Mission Produce',
      broker: 'TTS',
      rateCon: '',
      loadNum: 93805,
      commodity: 'Avocados 38-42F',
      loadRate: 3350,
      addtlComp: 0,
      totalComp: 3350,
      dhMi: 80,
      loadedMi: 971,
      totalMi: 1051,
      rpmNoDh: 3.45,
      totalRpm: 3.19,
    },
    // ...
  ];
}

export default async function LoadsPage() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
