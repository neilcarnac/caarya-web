import CardItem from '../CardItem/CardItem';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

function Resources() {
  return (
    <>
      <Stack direction={['column', 'row']} spacing="2">
        <Stack marginLeft="500px" flex="1" bg="gray.100" height="100%" justifyContent="center" alignItems="center">
          <CardItem
            title="Purpose and PLanning" />
        </Stack>
        <Stack paddingLeft="15px" flex="1" bg="gray.200" height="100%" justifyContent="center" alignItems="center">
          <CardItem
            title="Tools & Mentorship" />
        </Stack>
      </Stack>
      <Stack direction={['column', 'row']} spacing="2">
        <Stack paddingTop="20px" marginLeft="500px" flex="1" bg="gray.100" height="100%" justifyContent="center" alignItems="center">
          <CardItem
            title="Purpose and PLanning" />
        </Stack>
        <Stack paddingTop="20px" paddingLeft="10px" flex="1" bg="gray.200" height="100%" justifyContent="center" alignItems="center">
          <CardItem
            />
        </Stack>
      </Stack>
      

    </>
  );
}

export default Resources
