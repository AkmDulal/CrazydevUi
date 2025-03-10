import { Button } from '@/components/ui/button';
import { useRouter } from '@/routes/hooks';
import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme-provider';
import { SidebarProvider } from '@/hooks/use-sidebar';



const ErrorFallback = ({ error }: FallbackProps) => {
  const router = useRouter();
  console.log('error', error);
  return (
    <div
      className="flex h-screen w-screen flex-col items-center  justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-2xl font-semibold">
        Ooops, something went wrong :({' '}
      </h2>
      <pre className="text-2xl font-bold">{error.message}</pre>
      <pre>{error.stack}</pre>
      <Button className="mt-4" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  );
};

export default function AppProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <SidebarProvider>{children}</SidebarProvider>
              </ThemeProvider>
          </ErrorBoundary>
        </BrowserRouter>
    </Suspense>
  );
}
