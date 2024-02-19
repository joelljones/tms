// (client component) will contain our column definitions
'use client';

// import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDown, Trash2 } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// HANDLE DELETE
// const handleDeleteClick = async () => {
//   const res = await fetch(process.env.DB_URL + load._id, {
//     method: 'DELETE',
//   });
//   const json = await res.json();

//   if (res.ok) {
//     console.log('Load deleted:', json);
//   }
// };

// export const columns: ColumnDef<Payment>[] = [
export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: 'dateBooked',
    // header: 'Date Booked',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Booked
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'deliveryDate',
    // header: 'Delivery Date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Delivery Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
  {
    id: 'actions',
    cell: ({ row }) => {
      const load = row.original;

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          // onClick={handleDeleteClick}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      );
    },
  },
];
