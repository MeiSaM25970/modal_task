"use client";

import { FC, useEffect, useState } from "react";
import { Container } from "./styles";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ModalType } from "@/components/Modal/models";

const TestPage: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>();
  const [isClosable, setIsClosable] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const onClose = () => {
    router.push("/test");
    setShow(false);
  };
  const modalToggle = () => {
    setShow((prev) => {
      if (prev) {
        router.push("/test");
      } else {
        router.push("/test?show=true");
      }

      return !prev;
    });
  };

  useEffect(() => {
    const show = searchParams.get("show");
    setShow(!!show);
  }, [searchParams]);
  return (
    <Container>
      <div className="flex justify-center mt-[32px] gap-[32px] items-center">
        <Button onClick={modalToggle}>show modal</Button>
        <div>
          <label className="mr-2">Modal type:</label>
          <select onChange={(e) => setModalType(e.target.value as ModalType)}>
            <option value={"left"}>left</option>
            <option value={"right"}>right</option>
            <option value={"top"}>top</option>
            <option value={"bottom"}>bottom</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="mr-2">
            Closable:
          </label>
          <input
            type="checkbox"
            onChange={(e) => setIsClosable(e.target.checked)}
          />
        </div>
      </div>
      <Modal
        open={show}
        onClose={onClose}
        width={500}
        closable={isClosable}
        type={modalType}
      >
        test children modal
      </Modal>
    </Container>
  );
};

export default TestPage;
