import { useState } from 'react';
import { CloseIcon } from '@mui/icons';
import { Box, Flex, Text, IconButton } from '@mui/react';

function OvalItem({ title }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      display={isOpen ? 'block' : 'none'}
      bg="gray.100"
      borderRadius="50%"
      width="100px"
      height="60px"
      position="relative"
    >
      <Flex alignItems="center" justifyContent="space-between" px="2" py="1">
        <Text fontWeight="bold">{title}</Text>
        <IconButton
          aria-label="Close"
          icon={<CloseIcon />}
          variant="ghost"
          size="xs"
          onClick={handleClose}
        />
      </Flex>
    </Box>
  );
}

function ItemList() {
  return (
    <Flex justifyContent="space-between" maxWidth="300px">
      <OvalItem title="Item 1" />
      <OvalItem title="Item 2" />
      <OvalItem title="Item 3" />
    </Flex>
  );
}

export default ItemList;
