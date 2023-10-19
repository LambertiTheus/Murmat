import React, { type ReactNode } from 'react'

interface FormsProps {
    children: ReactNode
}

const Forms: React.FC<FormsProps> = ({ children }) => {
    return (
      <form className="rounded-lg bg-white p-6 w-8/12">
        <div className="grid grid-cols-1 gap-y-8 gap-x-4">
          {children}
        </div>
        <div className="mt-4 flex justify-end space-x-2 items-center">
        </div>
      </form>
    )
  }

  export default Forms