'use client';

import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

function Tabs({ className, orientation = 'horizontal', ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        'group/tabs flex gap-2 data-horizontal:flex-col rounded-lg shadow-sm overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva('flex overflow-x-auto scrollbar-hide border-b border-gray-200', {
  variants: {
    variant: {
      default: 'bg-white',
      line: 'gap-1 bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function TabsList({
  className,
  variant = 'default',
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}
function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        'flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200',
        'text-gray-600 hover:text-green-600 hover:bg-gray-50 cursor-pointer',
        'data-active:text-green-600',
        'data-active:border-b-2 data-active:border-green-600',
        'data-active:bg-green-50/50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/30',
        'aria-selected:text-green-600 aria-selected:border-b-2 aria-selected:border-green-600 aria-selected:bg-green-50/50',

        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn('flex-1 text-sm outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
