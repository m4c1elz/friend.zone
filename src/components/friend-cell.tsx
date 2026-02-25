import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { H2, H3, Small } from './ui/typography'
import { Clock } from 'lucide-react'

type FriendCellProps = {
    avatarSrc?: string
    name: string
    timezone: string
    initialTime: string
}

export function FriendCell({
    avatarSrc,
    name,
    timezone,
    initialTime,
}: FriendCellProps) {
    return (
        <div className="w-48 border border-dashed border-primary flex flex-col gap-3.5 items-center p-2">
            <Avatar className="size-20">
                <AvatarFallback className="text-xl">LV</AvatarFallback>
                <AvatarImage
                    src={avatarSrc}
                    alt={`${name}'s Profile Picture`}
                />
            </Avatar>
            <H3>{name}</H3>
            <H2>{initialTime}</H2>
            <div className="flex gap-2 items-center">
                <Clock />
                <Small>{timezone}</Small>
            </div>
        </div>
    )
}
