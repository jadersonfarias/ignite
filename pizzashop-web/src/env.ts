import { z } from "zod"

const envSchema = z.object({ // faz uma validação antes de usar uma variavel
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),//.url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env) // import.meta.env = é de onde vem as variaveis de ambiente do vite
