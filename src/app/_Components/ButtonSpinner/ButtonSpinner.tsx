import { LoaderIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4', className)}
      style={{
        animation: `spin 3s linear infinite`,
        strokeDasharray: '4, 4',
        strokeLinecap: 'round',
      }}
      {...props}
    />
  );
}

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}
