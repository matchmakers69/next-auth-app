import { CURRENCY } from "@prisma/client"

export type OverviewProps = {
    userId?: string
    currency: CURRENCY
}