import CardItem from '../CardItem/CardItem';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BlankItem from '../BlankItem/BlankItem';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Resources() {
  return (
    <>
      <Stack direction={['column', 'row']} spacing="2">
        <Stack marginLeft="500px" flex="1" bg="gray.100" height="100%" justifyContent="center" alignItems="center">
          <CardItem
            title="Purpose and Planning" 
            icon={<SearchIcon />}
            icontwo={<SearchIcon />}
            secondtitle="What was your purpose?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            thirdtitle="What methodology did you follow?"
            secondcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            />

        </Stack>
        <Stack paddingLeft="15px" flex="1" bg="gray.200" height="100%" justifyContent="center" alignItems="center">
        <CardItem
            title="Tools & Mentorship" 
            icon={<SearchIcon />}
            icontwo={<SearchIcon />}
            secondtitle="What tools did you use?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            thirdtitle="Who all did you collaborate with?"
            secondcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            />
        </Stack>
      </Stack>
      <Stack direction={['column', 'row']} spacing="2">
        <Stack paddingTop="20px" marginLeft="500px" flex="1" bg="gray.100" height="100%" justifyContent="center" alignItems="center">
        <CardItem
            title="Reflections & Takeaways" 
            icon={<SearchIcon />}
            icontwo={<SearchIcon />}
            secondtitle="Write about your challenges."
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            thirdtitle="Write about your learnings."
            secondcontent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, . Ut enim ad minim veniamllit anim id est laborum."
            />
        </Stack>
        <Stack paddingTop="20px" paddingLeft="10px" flex="1" bg="gray.200" height="100%" justifyContent="center" alignItems="center">
          <BlankItem 
          title= "Build your own template"
          icon={<AddCircleOutlineIcon style={{ color:"rgb(197 154 197)" ,fontSize: "130px"}} />}
          />
        </Stack>
      </Stack>
      

    </>
  );
}

export default Resources
