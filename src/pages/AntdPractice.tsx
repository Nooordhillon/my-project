import React from 'react'
import { Button, Flex } from "antd";
const AntdPractice = () => {
  return (
    <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary">Primary</Button>
      {/* <Button type="primary" disabled>
        Primary(disabled)
      </Button> */}
    </Flex>
    </Flex>


  )
}

export default AntdPractice