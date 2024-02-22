// (client component) will contain our column definitions
'use client';

// import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// HANDLE EDIT
// const handleEditSubmit = async (e) => {
//   e.preventDefault();

//   const updatedText = text;

//   const res = await fetch(process.env.DB_URL + load._id, {
//     method: 'PATCH',
//     body: JSON.stringify({ text: updatedText }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const json = await res.json();

//   if (!res.ok) {
//     setError(json.error);
//   }
//   if (res.ok) {
//     setText('');
//     setError(null);
//     console.log('Comment edited:', json);
//     closeModal(); // close modal here to prevent close on submit when error is present
//   }
// };

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
        className="dark:border-primary dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="dark:border-primary dark:data-[state=checked]:bg-primary dark:data-[state=checked]:text-primary-foreground"
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
    // header: 'Load Rate',
    header: () => <div>Load Rate</div>,
    cell: ({ row }) => {
      const loadRate = parseFloat(row.getValue('loadRate'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(loadRate);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'addtlComp',
    header: 'Addtl Comp',
  },
  {
    accessorKey: 'totalDue',
    // header: 'Total Due',
    header: () => <div>Total Due</div>,
    cell: ({ row }) => {
      const totalDue = parseFloat(row.getValue('totalDue'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(totalDue);

      return <div className="font-medium">{formatted}</div>;
    },
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
    // header: 'RPM no DH',
    header: () => <div>RPM no DH</div>,
    cell: ({ row }) => {
      const rpmNoDh = parseFloat(row.getValue('rpmNoDh'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(rpmNoDh);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'totalRpm',
    // header: 'Total RPM',
    header: () => <div>Total RPM</div>,
    cell: ({ row }) => {
      const totalRpm = parseFloat(row.getValue('totalRpm'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(totalRpm);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const load = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* EDIT ROW */}
            <DropdownMenuItem
            // onClick={openModal}
            >
              Edit load
            </DropdownMenuItem>

            {/* DELETE ROW */}
            <DropdownMenuItem
            // onClick={handleDeleteClick}
            >
              Delete load
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
