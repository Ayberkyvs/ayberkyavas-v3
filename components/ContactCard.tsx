import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'

const ContactCard = () => {
  return (
    <>
        <Card className="w-full bg-background-400 border border-border p-5 bg-[url('/bg_vector.svg')] bg-no-repeat bg-right-bottom shadow-lg" style={{ backgroundBlendMode: 'overlay' }}>
            <CardHeader>
                <h2 className='section_heading text-white'>
                    Let's Create Something Great Together
                </h2>
            </CardHeader>
            <CardContent>
                <p className='paragraph'>
                Together, we can bring ideas to life and turn visions into reality. Let your imagination lead the way as we embark on an inspiring journey. Every idea has the potential to become a masterpiece with the right steps and collaboration.
                </p>
            </CardContent>
            <CardFooter>
                <Button variant='secondary'>Schedule a call</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default ContactCard