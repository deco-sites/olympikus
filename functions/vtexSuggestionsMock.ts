import { LiveState, LoaderFunction } from "$live/types.ts";
import { Suggestion } from "deco-sites/std/commerce/types.ts";
import { ConfigVTEX } from "deco-sites/std/commerce/vtex/client.ts";

/**
 * Este mock existe pois não tem nenhum modo de pegar
 * top searches no formato legacy (a olympikus é legacy)
 */
const topSearches: LoaderFunction<
  null,
  Suggestion | null,
  LiveState<{ configVTEX: ConfigVTEX }>
> = (_, __, ___) => {
  return new Promise((res) => {
    res({
      data: {
        searches: [
          { term: "camiseta" },
          { term: "reverb" },
          { term: "exito" },
          { term: "mochila" },
          { term: "lusion" },
          { term: "rastro" },
          { term: "ultraleve 156g" },
          { term: "moletom" },
          { term: "corta vento" },
          { term: "ultraleve 177g" },
        ],
        products: [],
      },
    });
  });
};

export default topSearches;
