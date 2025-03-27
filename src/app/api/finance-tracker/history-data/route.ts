import { currentUser } from "@/lib/currentUserAPI";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { TransactionsHistoryValidationSchema } from "@/components/financeTracker/History/validation/transactionsHistoryValidationSchema";
import { getTransactionsHistoryData } from "@/lib/get-transactions-history-dataAPI";

export async function GET(request: Request) {
  const user = await currentUser();
  if (!user || !user.id) {
    redirect(paths.login());
  }
  const { searchParams } = new URL(request.url);
  const timeframe = searchParams.get("timeframe");
  const year = searchParams.get("year");
  const month = searchParams.get("month");

  const queryParams = TransactionsHistoryValidationSchema.safeParse({
    timeframe,
    month,
    year,
  });
  if (!queryParams.success) {
    return Response.json(queryParams.error.message, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  const data = await getTransactionsHistoryData(
    user.id,
    queryParams.data.timeframe,
    {
      month: queryParams.data.month,
      year: queryParams.data.year,
    },
  );

  return Response.json(data);
}
