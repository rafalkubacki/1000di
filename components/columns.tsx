'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Idea } from '@/lib/getIdeas';
import TimeagoComponent from './TimeagoComponent';
import { DataTableColumnHeader } from './column-header';
import { CheckIcon, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<Idea, any>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => (
      <div className="flex items-center justify-start">
        <Avatar className="mr-2 h-8 w-8">
          <AvatarImage src={row.original.icon?.url} />
          <AvatarFallback>{row.original.title.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <span className="font-bold">{row.original.title}</span>
        {row.original.featured && (
          <Badge className="ml-2" variant="secondary">
            Featured
          </Badge>
        )}
      </div>
    ),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'featured',
    enableGlobalFilter: false,
    enableSorting: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Featured" />,
  },
  {
    accessorKey: 'subtitle',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Subtitle" />,
    filterFn: 'includesString',
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    filterFn: 'includesString',
  },
  {
    accessorKey: 'demoUrl',
    enableGlobalFilter: false,
    enableSorting: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Demo" />,
    cell: ({ row }) =>
      row.original.demoUrl ? (
        <CheckIcon aria-hidden="true" className="h-4 w-4 text-green-500" />
      ) : (
        <X aria-hidden="true" className="h-4 w-4 text-red-500" />
      ),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'assetsUrl',
    enableGlobalFilter: false,
    enableSorting: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Assets" />,
    cell: ({ row }) =>
      row.original.assetsUrl ? (
        <CheckIcon aria-hidden="true" className="h-4 w-4 text-green-500" />
      ) : (
        <X aria-hidden="true" className="h-4 w-4 text-red-500" />
      ),
    filterFn: 'includesString',
  },
  {
    accessorKey: 'abandoned',
    enableGlobalFilter: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Abandoned" />,
    cell: ({ row }) => <TimeagoComponent date={row.original.dateAbandoned} />,
    sortingFn: (a, b) => (a ? -1 : b ? 1 : 0),
  },
];
