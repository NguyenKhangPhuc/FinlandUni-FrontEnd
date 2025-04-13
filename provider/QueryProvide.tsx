
'use client'
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
interface Props {
    children: ReactNode;
}
const queryClient = new QueryClient()
const QueryProvider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default QueryProvider