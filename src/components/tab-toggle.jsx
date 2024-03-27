import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoadsPage from '../app/loads/page';

export default function TabsToggle() {
  return (
    <div>
      <Tabs defaultValue="loads">
        <TabsList className="dark:bg-card dark:text-muted-foreground inline-block">
          <TabsTrigger
            value="loads"
            className="dark:data-[state=active]:bg-background"
          >
            Loads
          </TabsTrigger>
          {/* <TabsTrigger
            value="drivers"
            className="dark:data-[state=active]:bg-background"
          >
            Drivers
          </TabsTrigger>
          <TabsTrigger
            value="shippers/receivers"
            className="dark:data-[state=active]:bg-background"
          >
            Shippers/Receivers
          </TabsTrigger>
          <TabsTrigger
            value="brokers"
            className="dark:data-[state=active]:bg-background"
          >
            Brokers
          </TabsTrigger> */}
        </TabsList>

        <TabsContent value="loads">
          <LoadsPage />
        </TabsContent>
        {/* <TabsContent value="drivers">drivers table coming soon...</TabsContent>
        <TabsContent value="shippers/receivers">
          shippers/receivers table coming soon...
        </TabsContent>
        <TabsContent value="brokers">brokers table coming soon...</TabsContent> */}
      </Tabs>
    </div>
  );
}
