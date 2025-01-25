import { cn } from "@/lib/utils";
const Ping = ({ isAvailable }: { isAvailable: boolean }) => {
	return (
		<>
			<div className='relative'>
				<div className=''>
					<span className='flex size-[11px]'>
						<span
							className={cn(
								"absolute inline-flex size-full animate-ping rounded-full opacity-75",
								{ "bg-green-800": isAvailable },
								{ "bg-red-800": !isAvailable }
							)}
						></span>
						<span
							className={cn(
								"relative inline-flex size-[11px] rounded-full",
								{ "bg-green-800": isAvailable },
								{ "bg-red-800": !isAvailable }
							)}
						></span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Ping;
