import { Modal } from 'flowbite-react';
import Button from '../Button';

interface IConfirmationModal {
  onConfirmation: () => any;
  handleClose: () => void;
  show: boolean;
  title: string;
  message: React.ReactNode;
}

export default function ConfirmationModal({
  onConfirmation,
  handleClose,
  show,
  title,
  message,
}: IConfirmationModal) {
  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Header>
        <h1 className="font-medium text-gray-600">{title}</h1>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6 font-medium text-gray-500">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-end w-full gap-2">
          <div className="w-30">
            <Button
              classes={`bg-red-400 hover:bg-red-600`}
              onClick={handleClose}
            >
              Não
            </Button>
          </div>
          <div className="w-30">
            <Button onClick={onConfirmation}>Sim</Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
