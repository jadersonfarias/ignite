import { QueryClient } from "@tanstack/react-query" //Os dados buscados são automaticamente armazenados em cache. Isso significa que se você fizer a mesma requisição novamente, os dados podem ser retornados do cache em vez de serem buscados novamente do servidor, melhorando a performance e a experiência do usuário.

export const queryClient = new QueryClient() //coloca o query cliente envolta das rotas
