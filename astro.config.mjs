import { defineConfig } from "astro/config";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), react()],
});
