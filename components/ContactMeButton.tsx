import React from 'react'
import CTAButton from './ui/cta-button'
import { Mail } from 'lucide-react'
const ContactMeButton = () => {
  return (
    <CTAButton className="bg-transparent border border-blue-50 text-blue-50 font-bold rounded-lg mb-5 hover:bg-blue-300 hover:text-blue-950" link="mailto:contact@ayberkyavas.com" size='icon'>
        <Mail />
    </CTAButton>
  )
}

export default ContactMeButton