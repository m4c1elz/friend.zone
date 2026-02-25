import { AddFriendCell } from './components/add-friend-cell'
import { FriendCell } from './components/friend-cell'
import { Navbar } from './components/navbar'

export function App() {
    return (
        <>
            <Navbar />
            <main className="grid grid-cols-5 w-fit mx-auto gap-3.5 mt-12">
                <FriendCell
                    avatarSrc="https://i1.sndcdn.com/artworks-PWDL3zjMApNWy3tp-hKMaww-original.png"
                    name="Levithan"
                    timezone="America/Halifax"
                    initialTime="19:59"
                />
                <FriendCell
                    avatarSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pfps.gg%2Fpfps%2F9292-konata-izumi.png&f=1&nofb=1&ipt=ed04c8eec33336d67a737b6d0adca18fe41fe082b024ec8192308035f53d50c6"
                    name="Auri"
                    timezone="America/Halifax"
                    initialTime="19:59"
                />
                <FriendCell
                    avatarSrc="https://64.media.tumblr.com/8855bf91ff2a461f2fd5bfce72187822/2c558dcdf1a2e9c5-5d/s2048x3072/f2f5864ae3203da3f18ff744c73efc6dac9c1be5.pnj"
                    name="Peach"
                    timezone="Europe/Brussels"
                    initialTime="23:59"
                />

                <AddFriendCell />
            </main>
        </>
    )
}
