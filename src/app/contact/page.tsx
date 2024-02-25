import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function page() {
  return (
    <div className="container grid gap-4 px-4 py-12 md:grid-cols-2 md:gap-10 lg:gap-20 xl:px-6 xl:py-24">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or want to work together? Send me a message.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label className="text-lg" htmlFor="name">
              Name
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Optional)</span>
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label className="text-lg" htmlFor="email">
              Email
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Optional)</span>
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label className="text-lg" htmlFor="message">
              Message
            </Label>
            <Textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
          </div>
          <Button size="lg">Submit</Button>
        </div>
      </div>
  )
}
