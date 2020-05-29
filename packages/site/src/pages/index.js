import React from 'react'
import { Box, Text } from 'design-system'

export default () => (
  <Box backgroundColor="hotpink">
    <Box color="primary">Hello Box</Box>
    <Box color="secondary">Hello Box</Box>
    <Box color="papayawhip" padding="large">
      Hello Box
    </Box>
    <Box color="tertiary" padding={20}>
      Hello Box
    </Box>
    <Text variant="body">Hello text</Text>
    <Box color="tertiary" padding="xlarge">
      Coool
    </Box>
  </Box>
)
