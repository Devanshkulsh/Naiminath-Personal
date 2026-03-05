import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "rwvwie1h",
  dataset: "naiminath-teachers",
  apiVersion: "2026-03-05",
  useCdn: true,
});

export default sanityClient;
