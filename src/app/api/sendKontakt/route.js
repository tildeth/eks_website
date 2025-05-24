export const dynamic = "force-dynamic"; 

export async function POST(req) {
  const data = await req.json();

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_KEY;

  const res = await fetch(`${SUPABASE_URL}/rest/v1/forespoergsler`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error(await res.text());
    return new Response("Noget gik galt", { status: 500 });
  }

  return new Response("Forespørgslen er modtaget", { status: 200 });
}
