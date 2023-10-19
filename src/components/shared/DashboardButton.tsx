import Link from "next/link"
import React from "react"

type DashboardButtonProps = {
    title: string
    link: string
    Icon: React.ComponentType
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ title, link, Icon }) => {
    return (
        <Link href={link}>
            <button className="flex items-center justify-center bg-primary-color text-white font-bold rounded-lg p-6">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <Icon />
                    <span>{title}</span>
                </div>
            </button>
        </Link>
    )
}

export default DashboardButton