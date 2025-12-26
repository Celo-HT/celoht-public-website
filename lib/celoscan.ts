const API = "https://api.celoscan.io/api";
const KEY = process.env.CELOSCAN_API_KEY;

export async function fetchDonations(contract: string) {
  const res = await fetch(
    `${API}?module=account&action=txlist&address=${contract}&apikey=${KEY}`,
    { cache: "no-store" }
  );
  const json = await res.json();
  return json.result;
}