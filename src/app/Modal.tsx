
"use client";

import { twMerge } from "tailwind-merge";

function Modal({
  isShow = false,
  mode = "top",
  children,
}: {
  isShow: boolean;
  mode: string;
  children: string;
}) {
  const modes = {
    left: "modal-left",
    right: "modal-right",
    top: "modal-top",
    bottom: "modal-bottom",
  };
  const modeModal: string = modes[mode];
  return (
    <div
      className={twMerge(
        "fixed modal",
        isShow && "active",
        modeModal,
      )}
    >
      {children}
    </div>
  );
}
export default Modal;
