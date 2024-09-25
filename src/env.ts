import { z } from 'zod';

const envSchema = z.object({
  MODE: z
    .union([z.literal('development'), z.literal('production')])
    .default('development'),
  VITE_APP_TITLE: z.string(),
  VITE_MSW_ACTIVATED: z.string(),
  VITE_API_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
