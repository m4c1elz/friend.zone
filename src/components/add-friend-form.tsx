import { Button } from './ui/button'
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from './ui/dialog'

// TODO
export function AddFriendForm() {
    return (
        <form>
            <DialogHeader>
                <DialogTitle>Add a Friend</DialogTitle>
                <DialogDescription>
                    Keep in track with your friend's current time!
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button>Save</Button>
            </DialogFooter>
        </form>
    )
}
