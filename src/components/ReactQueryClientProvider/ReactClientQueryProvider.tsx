import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ReactQueryClientProvidersProps {
  children: ReactNode;
}

const ReactQueryClientProviders = ({
  children,
}: ReactQueryClientProvidersProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProviders;
