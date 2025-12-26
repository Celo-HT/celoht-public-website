import { fetchDonations } from "@/lib/celoscan";

export async function GET() {
  const data = await fetchDonations(
    process.env.NEXT_PUBLIC_DONATION_CONTRACT!
  );
  return Response.json(data);
}