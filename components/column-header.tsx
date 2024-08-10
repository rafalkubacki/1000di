import { Column } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, ArrowUpDown, ArrowUpIcon } from 'lucide-react';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div>{title}</div>;
  }

  return (
    <Button
      variant="link"
      size="link"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {title}
      {column.getIsSorted() === 'desc' ? (
        <ArrowDownIcon className="ml-1 h-4 w-4" />
      ) : column.getIsSorted() === 'asc' ? (
        <ArrowUpIcon className="ml-1 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-1 h-4 w-4 text-muted-foreground" />
      )}
    </Button>
  );
}
