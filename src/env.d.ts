/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_POKE_API: string;
  readonly PUBLIC_MAIN_POKE_AMOUNT: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
