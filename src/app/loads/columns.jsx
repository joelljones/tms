// (client component) will contain our column definitions
'use client';

// import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// export const columns: ColumnDef<Payment>[] = [
export const columns = [
  {
    accessorKey: 'dateBooked',
    header: 'Date Booked',
  },
  {
    accessorKey: 'deliveryDate',
    header: 'Delivery Date',
  },
  {
    accessorKey: 'driver',
    header: 'Driver',
  },
  {
    accessorKey: 'loadStatus',
    header: 'Load Status',
  },
  {
    accessorKey: 'shippersReceivers',
    header: 'Shippers/Receivers',
  },
  {
    accessorKey: 'broker',
    header: 'Broker',
  },
  {
    accessorKey: 'rateCon',
    header: 'Rate Con',
  },
  {
    accessorKey: 'loadNum',
    header: 'Load #',
  },
  {
    accessorKey: 'commodity',
    header: 'Commodity',
  },
  {
    accessorKey: 'loadRate',
    header: 'Load Rate',
  },
  {
    accessorKey: 'addtlComp',
    header: 'Addtl Comp',
  },
  {
    accessorKey: 'totalDue',
    header: 'Total Due',
  },
  {
    accessorKey: 'dhMi',
    header: 'DH mi',
  },
  {
    accessorKey: 'loadedMi',
    header: 'Loaded mi',
  },
  {
    accessorKey: 'totalMi',
    header: 'Total mi',
  },
  {
    accessorKey: 'rpmNoDh',
    header: 'RPM no DH',
  },
  {
    accessorKey: 'totalRpm',
    header: 'Total RPM',
  },
];
