import React, { ReactElement, useState } from 'react'
import './styles.css'

interface Props {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Dialog({ header, footer, children, isOpen = false, setIsOpen }: Props): ReactElement {
  return (
    <div className="modal__wrapper" style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={() => { setIsOpen(false) }}
    >
      <div className="modal__container">
        <div className="modal__head">

        </div>
        <div className="modal__footer"></div>
      </div>
    </div>
  )
}
