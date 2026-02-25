import z from 'zod'
import { Button } from './ui/button'
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from './ui/dialog'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './ui/select'

const timezones = Intl.supportedValuesOf('timeZone')
console.log(timezones)

const formSchema = z.object({
    name: z.string().min(2),
    timezone: z.enum(timezones),
    avatar: z.file(),
})

type FormSchema = z.infer<typeof formSchema>

export function AddFriendForm() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            timezone: '',
            avatar: undefined,
        },
    })

    function onSubmit(data: FormSchema) {
        console.log(data)
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle>Add a Friend</DialogTitle>
                <DialogDescription>
                    Keep in track with your friend's current time!
                </DialogDescription>
            </DialogHeader>
            <form
                id="add-friend-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <Controller
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                placeholder="John Doe"
                            />
                        </Field>
                    )}
                />
                <Controller
                    control={form.control}
                    name="avatar"
                    render={({ field }) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>Avatar</FieldLabel>
                            <Input
                                {...field}
                                type="file"
                                value=""
                                id={field.name}
                            />
                        </Field>
                    )}
                />
                <Controller
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                        <Field>
                            <FieldLabel htmlFor={field.name}>
                                Timezone
                            </FieldLabel>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {/* FIXME - this affects performance as it's rendering every timezone at once */}
                                    {timezones.map((tz, i) => (
                                        <SelectItem key={i} value={tz}>
                                            {tz}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>
                    )}
                />
            </form>
            <DialogFooter>
                <Button type="submit" form="add-friend-form">
                    Save
                </Button>
            </DialogFooter>
        </>
    )
}
