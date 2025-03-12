import { currentUser } from "@/lib/currentUserAPI";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { getBalanceStats } from "@/lib/getBalanceStatsAPI";
import { OverviewQuerySchema } from "@/components/financeTracker/Overview/validation/overviewQuerySchema";

export async function GET(request: Request) {
  const user = await currentUser();
  if (!user || !user.id) {
    redirect(paths.login());
  }
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const queryParams = OverviewQuerySchema.safeParse({ from, to });
  if (!queryParams.success) {
    return Response.json(queryParams.error.message, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  const stats = await getBalanceStats(
    user.id,
    queryParams.data.from,
    queryParams.data.to,
  );
  return Response.json(stats);
}
