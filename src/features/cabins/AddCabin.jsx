import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import { useState } from "react";
import Modal from "../../ui/Modal.jsx";
import CabinTable from "./CabinTable.jsx";

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
    // <div>
    //   <Button onClick={() => setIsOpenModal((form) => !form)}>
    //     Add new cabin
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal(false)}>
    //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}
