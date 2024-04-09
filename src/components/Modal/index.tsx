"use client";
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { ModalContainer } from "./style";
import { ModalType } from "./models";

interface IProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  width?: number;
  closable?: boolean;
  type?: ModalType;
}

export const Modal: FC<IProps> = ({
  open,
  onClose,
  children,
  width,
  closable,
  type,
}) => {
  const [showModal, setShowModal] = useState<boolean>(open);

  useEffect(() => {
    setShowModal(open);
  }, [open]);

  if (!showModal) {
    return <></>;
  }
  return (
    <ModalContainer $width={width}>
      <div
        className="modal-wrapper"
        onClick={() => closable && onClose()}
      ></div>
      <div className={`content ${type}`}>
        <span
          onClick={onClose}
          className="absolute right-[8px] cursor-pointer select-none"
        >
          x
        </span>
        {children}
      </div>
    </ModalContainer>
  );
};
