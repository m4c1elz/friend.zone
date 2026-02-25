import { Plus } from 'lucide-react'
import { Lead } from './ui/typography'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { AddFriendForm } from './add-friend-form'

export function AddFriendCell() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    role="button"
                    className="relative w-48 border border-dashed cursor-pointer border-primary flex flex-col place-content-center items-center p-2 hover:border-white hover:text-white transition"
                >
                    <Plus size={50} />
                    <Lead className="absolute left-1/2 transform-[translateX(-50%)] bottom-5 whitespace-nowrap">
                        Add friend
                    </Lead>
                </div>
            </DialogTrigger>
            <DialogContent>
                <AddFriendForm />
            </DialogContent>
        </Dialog>
    )
}
