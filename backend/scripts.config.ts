import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    dev: {
      cmd: "deno run --allow-net --allow-read --allow-env backend/api/main.ts",
      desc: "api start",
    },
  },
};

export default config;
