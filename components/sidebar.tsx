import { Box, Text, Flex, ScrollArea } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export default function Sidebar() {
    const { height, width } = useViewportSize();

    return (
        <Box component="div" h={height - 10} w={80} pt={30} align='center' pos={'absolute'} bg='rgba(0, 0, 0, 0.1)' c='grey'>
            <Text size="sm">☰</Text>
            <ScrollArea
                mt={60}
                h={400}  // Set the height of the scrollable section                
            >
                <Box h={500}>
                    <Flex
                        direction='column'
                        gap={50}
                    >
                        <Text size="sm">Remover</Text>
                        <Text size="sm">Splitter</Text>
                        <Text size="sm">Pitcher</Text>
                        <Text size="sm">Key BPM Finder</Text>
                        <Text size="sm">Cutter</Text>
                        <Text size="sm">Joiner</Text>
                        <Text size="sm">Recorder</Text>
                        <Text size="sm">Karoke</Text>
                    </Flex>
                </Box>
            </ScrollArea>
            <Flex
                direction='column'
                gap={50}
                mt={80}
            >
                <Text size="sm">Support</Text>
                <Text size="sm">Flags</Text>
            </Flex>

        </Box>
    );
}