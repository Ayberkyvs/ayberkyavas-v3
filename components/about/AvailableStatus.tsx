import { AboutMe } from '@/sanity/types'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils';
import Ping from '@/components/ui/ping';

interface AvailableStatusProps {
    status: any;
    className?: string;
}
const AvailableStatus = ({status, className}: AvailableStatusProps) => {
  const { isAvailable, statusContext } = status;
  return (
    <>
        <Badge className={cn('flex-center w-fit text-center text-sm truncate border gap-2',
            {'border-green-900 bg-green-300 text-green-950': isAvailable},
            {'border-red-900 bg-red-300 text-red-950' : !isAvailable},
            className
            )}>
            <Ping isAvailable={isAvailable} /> {statusContext}
        </Badge>
    </>
  )
}

export default AvailableStatus