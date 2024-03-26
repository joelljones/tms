// (client component) will contain our column definitions
'use client';

// import { ColumnDef } from "@tanstack/react-table"

import { Button } from '@/components/ui/button';

import { Checkbox } from '@/components/ui/checkbox';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import EditRowForm from '@/components/edit-row-form';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

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
          className="p-2 dark:hover:bg-accent"
        >
          Booked
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
          className="p-2 dark:hover:bg-accent"
        >
          Delivery
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
    header: 'Status',
  },
  {
    accessorKey: 'shippersReceivers',
    header: 'Shipper/Receiver',
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
    header: () => <div>Rate</div>,
    cell: ({ row }) => {
      const loadRate = parseFloat(row.getValue('loadRate'));
      if (!isNaN(loadRate)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(loadRate);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if loadRate is not present
      }
    },
  },
  {
    accessorKey: 'addtlComp',
    // header: 'Addtl Comp',
    header: () => <div>Addtl Comp</div>,
    cell: ({ row }) => {
      const addtlComp = parseFloat(row.getValue('addtlComp'));
      if (!isNaN(addtlComp)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(addtlComp);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if addtlComp is not present
      }
    },
  },
  {
    accessorKey: 'totalComp',
    // header: 'Total Due',
    header: () => <div>Total Comp</div>,
    cell: ({ row }) => {
      const totalComp = parseFloat(row.getValue('totalComp'));
      if (!isNaN(totalComp)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(totalComp);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if totalComp is not present
      }
    },
  },
  {
    accessorKey: 'dhMi',
    header: 'DH mi',
  },
  {
    accessorKey: 'loadedMi',
    // header: 'Loaded mi',
    header: () => <div>Loaded mi</div>,
    cell: ({ row }) => {
      const loadedMi = parseFloat(row.getValue('loadedMi'));
      if (!isNaN(loadedMi)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(loadedMi);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if loadedMi is not present
      }
    },
  },
  {
    accessorKey: 'totalMi',
    // header: 'Total mi',
    header: () => <div>Total mi</div>,
    cell: ({ row }) => {
      const totalMi = parseFloat(row.getValue('totalMi'));
      if (!isNaN(totalMi)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(totalMi);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if totalMi is not present
      }
    },
  },
  {
    accessorKey: 'rpmNoDh',
    // header: 'RPM no DH',
    header: () => <div>RPM no DH</div>,
    cell: ({ row }) => {
      const rpmNoDh = parseFloat(row.getValue('rpmNoDh'));
      if (!isNaN(rpmNoDh)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(rpmNoDh);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if rpmNoDh is not present
      }
    },
  },
  {
    accessorKey: 'totalRpm',
    // header: 'Total RPM',
    header: () => <div>Total RPM</div>,
    cell: ({ row }) => {
      const totalRpm = parseFloat(row.getValue('totalRpm'));
      if (!isNaN(totalRpm)) {
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(totalRpm);

        return <div className="font-medium">{formatted}</div>;
      } else {
        return null; // Return null if totalRpm is not present
      }
    },
  },
  // EDIT ROW & DELETE ROW
  {
    id: 'actions',
    cell: ({ row }) => {
      const load = row.original;

      const onDeleteClick = async () => {
        const { id } = row.original;

        try {
          const { data, error } = await supabase
            .from('loads')
            .delete()
            .eq('id', id);

          if (error) {
            throw error;
          }

          console.log('Data deleted successfully:', row.original);
          // Reload the page after a short delay
          // setTimeout(() => {
          window.location.reload();
          // }, 1000); // Reload after 1 second (1000 milliseconds)
        } catch (error) {
          console.error('Error deleting row:', error.message);
        }
      };

      return (
        // To activate the Dialog component from within a Dropdown Menu, you must encase the Dropdown Menu component in the Dialog component
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:hover:bg-accent"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {/* EDIT ROW */}
              <DialogTrigger asChild>
                <DropdownMenuItem>Edit load</DropdownMenuItem>
              </DialogTrigger>
              {/* DELETE ROW */}
              <DropdownMenuItem onClick={onDeleteClick}>
                Delete load
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="dark:border-background dark:bg-popover max-h-screen">
            <DialogHeader className="max-h-screen">
              {/* EDIT ROW FORM */}
              <EditRowForm rowData={load} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
