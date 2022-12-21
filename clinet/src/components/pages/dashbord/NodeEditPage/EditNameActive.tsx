import { FormControl, FormLabel, Input, useColorModeValue, Switch } from '@chakra-ui/react'
import React from 'react'

function EditNameActiv(props:any) {
  return (
    <FormControl display={'flex'} flexDirection={'row'}>
          <FormLabel>Node Name</FormLabel>
          <Input
            variant='unstyled'
            color={useColorModeValue('black', 'black')}
            bg={'white'}
            borderRadius={'5px'}
            mr={2}
            px={3}
            w={'50%'}
            value={props.nData.node_name}

            onChange={e => {
                props.setnDate({ ...props.nData, node_name: e.target.value })
            }}
          />

            <FormLabel htmlFor='email-alerts' mb='0'>
              able and disabled
            </FormLabel>
            {(props.nData.active === "true") ? <Switch id='email-alerts' size={'lg'} colorScheme={'green'} isChecked onChange={e=>{
                  props.setnDate({ ...props.nData, active:'true'});
                  console.log(props.nDate);
            }}/>
             : <Switch id='email-alerts' size={'lg'} colorScheme={'green'} />}
         
        </FormControl>
  )
}

export default EditNameActiv