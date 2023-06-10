export type HoverMenuItemProps = {
    title: string
    desc: string
    href: string
    isExternal?: boolean
}

const HoverMenuItem = ({ props }: { props: HoverMenuItemProps }) => {
    const { title, desc, href, isExternal = false } = props

    const content = () => {
        return <div className="md:hover:bg-dk-700 py-2 px-4 cursor-pointer rounded-md">
            <p className="text-lt font-medium">{title}</p>
            <p className="text-gray-400 font-light">{desc}</p>
        </div>
    }

    if (isExternal) {
        return <>
            <div className="">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {content()}
                </a>
            </div>
        </>
    } else {
        return <>
            <a href={href}>
                {content()}
            </a>
        </>
    }
}

export default HoverMenuItem