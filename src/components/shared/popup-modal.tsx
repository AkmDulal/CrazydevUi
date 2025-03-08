import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';

type TPopupModalProps = {
  onConfirm?: () => void;
  loading?: boolean;
  title?:string;
  renderModal: (onClose: () => void) => React.ReactNode;
};
export default function PopupModal({ renderModal, title }: TPopupModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button className={`text-xs text-[#fff] cursor-pointer  hover:text-[#222] md:text-sm w-full rounded-full ${title === "Create chat" ? 'bg-[#FFFFFF26]' : "bg-transparent border border-[#fff]  " } `} onClick={() => setIsOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> {title}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={'!bg-background !px-1'}
      >
        <ScrollArea className="h-[80dvh] px-6  ">
          {renderModal(onClose)}
        </ScrollArea>
      </Modal>
    </>
  );
}
