import { rest } from "msw";
import { setupServer } from "msw/node";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(
  rest.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results: [
            {
              id: 2996944,
              name: "Lyon",
              latitude: 45.74846,
              longitude: 4.84671,
              ranking: 1.3980293,
              elevation: 173.0,
              feature_code: "PPLA",
              country_code: "FR",
              admin1_id: 11071625,
              admin2_id: 2987410,
              admin3_id: 2996943,
              admin4_id: 6454573,
              timezone: "Europe/Paris",
              population: 472317,
              country_id: 3017382,
              country: "France",
              admin1: "Auvergne-Rhône-Alpes",
              admin2: "Rhône",
              admin3: "Lyon",
              admin4: "Lyon",
            },
            {
              id: 2996966,
              name: "Paris",
              latitude: 45,
              longitude: 6,
              ranking: 1.3980293,
              elevation: 173.0,
              feature_code: "PPLA",
              country_code: "FR",
              admin1_id: 11071625,
              admin2_id: 2987410,
              admin3_id: 2996943,
              admin4_id: 6454573,
              timezone: "Europe/Paris",
              population: 472317,
              country_id: 3017382,
              country: "France",
              admin1: "Paris",
              admin2: "Rhône",
              admin3: "Lyon",
              admin4: "Lyon",
            },
            {
              admin1: "Catalogne",
              admin1_id: 3336901,
              admin2: "Province de Barcelone",
              admin2_id: 3128759,
              admin3: "Barcelone",
              admin3_id: 6356055,
              country: "Espagne",
              country_code: "ES",
              country_id: 2510769,
              elevation: 15,
              feature_code: "PPLA",
              id: 3128760,
              latitude: 41.38879,
              longitude: 2.15899,
              name: "Barcelone",
              population: 1621537,
              ranking: 1.4000001,
              timezone: "Europe/Madrid",
            },
          ],
          generationtime_ms: 0.4390478,
        })
      );
    }
  )
);
