import { useForm } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function EditRowForm({ rowData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: rowData });

  const onSubmit = async (formData) => {
    try {
      const { data, error } = await supabase
        .from('loads')
        .update(formData)
        .eq('id', formData.id);

      if (error) {
        throw error;
      }

      console.log('Data updated successfully:', formData);
      window.location.reload();
    } catch (error) {
      console.error('Error updating row:', error.message);
    }
  };

  return (
    <ScrollArea className="mt-3 mb-10">
      <form className="h-full space-y-4 mx-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Booked
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            // placeholder="dateBooked"
            {...register('dateBooked', { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Delivery
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            // placeholder="deliveryDate"
            {...register('deliveryDate', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Driver
          </label>
          {/* <select
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            {...register('driver')}
          >
            <option value=""></option>
            <option value="John Doe">John Doe</option>
            <option value=" Jane Doe"> Jane Doe</option>
            <option value=" John Smith"> John Smith</option>
            <option value=" Jane Smith"> Jane Smith</option>
          </select> */}
          <Select
            className=""
            defaultValue={rowData.driver}
            {...register('driver')}
          >
            <SelectTrigger className="dark:border-input dark:bg-transparent">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="dark:border-input dark:bg-popover">
              <SelectItem value="John Doe">John Doe</SelectItem>
              <SelectItem value="Jane Doe"> Jane Doe</SelectItem>
              <SelectItem value="John Smith"> John Smith</SelectItem>
              <SelectItem value="Jane Smith"> Jane Smith</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Status
          </label>
          {/* <select
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            {...register('loadStatus')}
          >
            <option value=""></option>
            <option value="Booked">Booked</option>
            <option value=" @P/U"> @P/U</option>
            <option value=" In Transit"> In Transit</option>
            <option value=" @Delivery"> @Delivery</option>
            <option value=" Invoiced"> Invoiced</option>
          </select> */}
          <Select
            className=""
            defaultValue={rowData.loadStatus}
            {...register('loadStatus')}
          >
            <SelectTrigger className="dark:border-input dark:bg-transparent">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="dark:border-input dark:bg-popover">
              <SelectItem value="Booked">Booked</SelectItem>
              <SelectItem value="@P/U"> @P/U</SelectItem>
              <SelectItem value="In Transit"> In Transit</SelectItem>
              <SelectItem value="@Delivery"> @Delivery</SelectItem>
              <SelectItem value="Invoiced"> Invoiced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Shipper/Receiver
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            // placeholder="shipperReceiver"
            {...register('shippersReceivers', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Broker
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            // placeholder="broker"
            {...register('broker', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Load #
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="loadNum"
            {...register('loadNum', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Commodity
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            // placeholder="commodity"
            {...register('commodity', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Load Rate
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="loadRate"
            {...register('loadRate', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Addtl Comp
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="addtlComp"
            {...register('addtlComp', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Total Comp
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="totalComp"
            {...register('totalComp', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            DH mi
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="dhMi"
            {...register('dhMi', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Loaded mi
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="loadedMi"
            {...register('loadedMi', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Total mi
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            // placeholder="totalMi"
            {...register('totalMi', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            RPM no DH
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            step="any" // Add step attribute to allow decimals
            // placeholder="rpmNoDh"
            {...register('rpmNoDh', {})}
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            // htmlFor=""
          >
            Total RPM
          </label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            type="number"
            step="any" // Add step attribute to allow decimals
            // placeholder="totalRpm"
            {...register('totalRpm', {})}
          />
        </div>

        <div className="flex">
          <Button className="ml-auto">
            <input type="submit" />
          </Button>
        </div>
      </form>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
