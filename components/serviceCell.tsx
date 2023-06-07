export type ServiceCellProps = {
    icon: JSX.Element
    title: string
    description: string
    href: string
}

export default function ServiceCell({ props }: { props: ServiceCellProps }) {
    return <div className="bg-white p-4 space-y-4 rounded-md flex flex-col justify-center items-start h-full">
        <div className="p-4 bg-acc1 w-min rounded-full text-lt">{props.icon}</div>
        <div className="space-y-2 flex-grow">
            <h3 className="text-2xl font-medium">{props.title}</h3>
            <p className="font-light">{props.description}</p>
        </div>
        <p className="hover:underline hover:cursor-pointer hover:text-acc1 w-fit">Learn More &darr;</p>
    </div>
}