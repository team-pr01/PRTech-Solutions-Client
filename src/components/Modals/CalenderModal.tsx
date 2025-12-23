import React, { useState } from 'react'
import Modal from '../Reusable/Modal/Modal'

const CalenderModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}><div className='flex items-center justify-between gap-2'></div></Modal>
  )
}

export default CalenderModal