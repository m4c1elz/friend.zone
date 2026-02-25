import { Plus } from 'lucide-react'
import { Lead } from './ui/typography'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog'
import { Button } from './ui/button'

export function AddFriendCell() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    role="button"
                    className="relative w-48 border border-dashed border-primary flex flex-col place-content-center items-center p-2"
                >
                    <Plus size={50} />
                    <Lead className="absolute left-1/2 transform-[translateX(-50%)] bottom-5 whitespace-nowrap">
                        Add friend
                    </Lead>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>See how quick I made this?</DialogTitle>
                    <DialogDescription>
                        God fucking damn it, god bless shadcn.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button>Yeah, i guess.</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
