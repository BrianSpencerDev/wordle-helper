import {QuestionOutlineIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
import {
    Button,
    IconButton, 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';

function Navbar(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    return <nav className="flex justify-between border-b-2 border-gray-300 text-4xl">
        <IconButton variant='unstyled' size='lg' aria-label='How to Modal' onClick={onOpen} icon={<QuestionOutlineIcon />}/>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to Use</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Type in your yellow & green letters and hit enter to see possible answers.</p>
            <br></br>
            <p>Click on the letter to change to and from yellow & green.</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        <p>Wordle Helper</p>
        <IconButton aria-label='toggle night mode' onClick={toggleColorMode}>
            { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </IconButton>
    </nav>

}

export default Navbar;