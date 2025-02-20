import { BlogInfoIcon } from "@/components/blog/BlogInfoIcon";

export function MDXNote({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside
      {...props}
      className="relative my-2 rounded-lg border border-gray-300 bg-gray-100 p-3 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
    >
      {/* Icon Container */}
      <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-900">
        <BlogInfoIcon />
      </div>

      {/* Note Content */}
      <div className="pl-6">
        <b>Note: </b>
        {children}
      </div>
    </aside>
  );
}
