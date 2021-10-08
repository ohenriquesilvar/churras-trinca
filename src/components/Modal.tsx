import {
  Modal as CustomModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  header: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  size?: string
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  header,
  footer,
  size,
}: ModalProps) => {
  return (
    <CustomModal
      size={size ? size : "5xl"}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        {header ? <ModalHeader>{header}</ModalHeader> : null}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </CustomModal>
  )
}
