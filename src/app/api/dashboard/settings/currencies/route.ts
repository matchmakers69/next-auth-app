import { currentUser } from "@/lib/currentUserAPI";
import { transactionsCurrencySchema } from "@/components/dashboard/TransactionsCurrencyContainer/FormTransactionsCurrency/validation/transactionsCurrencySchema";
import { redirect } from "next/navigation";
import paths from "@/utils/paths";
import { db } from "@/lib/db";
import { CURRENCY } from "@prisma/client";

export async function GET(_request: Request) {
  const user = await currentUser();
  if (!user || !user.id) {
    return Response.json({ message: "Unauthorized", status: 401 });
  }

  try {
    const userCurrency = await db.userCurrency.findUnique({
      where: { userId: user.id },
    });

    if (!userCurrency) {
      // Return a default currency if not found
      return Response.json({ currency: "GBP" });
    }

    // if (!userCurrency) {
    //   return Response.json({ message: "Currency not found", status: 404 });
    // }

    return Response.json({ currency: userCurrency.currency });
  } catch (err) {
    console.error("Error fetching currency:", err);
    return Response.json(
      { message: "Error fetching currency" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  const user = await currentUser();
  if (!user || !user.id) {
    redirect(paths.login());
  }

  try {
    const body = await request.json();
    const parsedBody = transactionsCurrencySchema.safeParse(body);
    if (!parsedBody.success) {
      return Response.json({ message: parsedBody.error.message, status: 400 });
    }

    const currency = parsedBody.data.currency as CURRENCY;
    const updatedCurrency = await db.userCurrency.upsert({
      where: { userId: user.id },
      update: { currency },
      create: { userId: user.id, currency },
    });
    return Response.json({ currency: updatedCurrency.currency });
  } catch (err) {
    console.error("Error updating currency:", err);
    return Response.json(
      { message: "Error updating currency" },
      { status: 500 },
    );
  }
}
