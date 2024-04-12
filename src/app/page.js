// import ModeToggle from '@/components/theme-toggle';
import TabsToggle from '@/components/tab-toggle';

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center py-20 px-8">
      {/* <ModeToggle /> */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 w-full">
        <TabsToggle />
      </div>
    </main>
  );
}
