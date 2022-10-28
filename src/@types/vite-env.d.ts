/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_CONFIG_KEY: string; // write config you need
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
