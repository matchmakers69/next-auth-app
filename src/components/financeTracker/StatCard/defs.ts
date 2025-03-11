export type StatCardProps = {
    title: string;
    value: number;
    type?: "expense" | "income";
    icon: React.ReactNode;
    formatter?: Intl.NumberFormat;
};