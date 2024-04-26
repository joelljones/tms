// (client component) will contain our <DataTable /> component
"use client";

import * as React from "react";

import {
  // ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  // SortingState,
  // VisibilityState,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusSquare } from "lucide-react";

import AddRowForm from "@/components/add-row-form";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   })
export default function DataTable({ columns, data }) {
  const [sorting, setSorting] = React.useState([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({
    // hide these columns by default
    rateCon: false,
    loadRate: false,
    addtlComp: false,
    dhMi: false,
    loadedMi: false,
    rpmNoDh: false,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      rowSelection,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <>
      <div className="flex items-center py-4">
        {/* FILTER */}
        <Input
          placeholder="Filter load status..."
          value={table.getColumn("loadStatus")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("loadStatus")?.setFilterValue(event.target.value)
          }
          className="max-w-sm dark:border-background dark:bg-background dark:text-muted-foreground dark:ring-offset-background dark:placeholder:text-muted-foreground dark:focus-visible:ring-ring dark:data-[state=active]:bg-background"
        />

        <div className="ml-auto flex items-center">
          {/* ADD ROW BTN/DIALOG */}
          <Dialog>
            <DialogTrigger className="mr-1 rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground">
              <PlusSquare className="size-8 text-muted-foreground hover:text-foreground" />
            </DialogTrigger>
            <DialogContent className="max-h-screen dark:border-background dark:bg-popover">
              <DialogHeader className="max-h-screen">
                {/* ADD ROW FORM */}
                <AddRowForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* COLUMN VISIBILITY TOGGLE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="max-w-sm focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-background dark:bg-background dark:text-muted-foreground dark:ring-offset-background dark:placeholder:text-muted-foreground dark:hover:bg-accent dark:focus-visible:ring-ring dark:data-[state=active]:bg-background"
              >
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* TABLE */}
      <ScrollArea className="rounded-md border dark:bg-card">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    // <TableCell key={cell.id} className="text-center">
                    //   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    // </TableCell>
                    <TableCell key={cell.id} className="text-center">
                      {cell.getValue() === "Booked" ? (
                        <Badge className="dark:bg-green-500">Booked</Badge>
                      ) : cell.getValue() === "@P/U" ? (
                        <Badge className="dark:bg-blue-500">@P/U</Badge>
                      ) : cell.getValue() === "In Transit" ? (
                        <Badge className="dark:bg-purple-500">In Transit</Badge>
                      ) : cell.getValue() === "@Delivery" ? (
                        <Badge className="dark:bg-yellow-500">@Delivery</Badge>
                      ) : cell.getValue() === "Invoiced" ? (
                        <Badge className="dark:bg-orange-500">Invoiced</Badge>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="flex-1 pt-4 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </>
  );
}
