import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/2349033952309?text=Hello%20Professional%20School%20Web'

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow-lg text-white z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  )
}

export default WhatsAppButton
