import { Text, Flex, Grid, Button } from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';

function Cutter() {
    const { height, width } = useViewportSize();
    return (
        <>
            <Flex
                mih={height - 10}
                justify="center"
                align="center"
                mt={10}
                c="white"
            >
                <Grid justify='center' pos={"sticky"}>
                    <Grid.Col mb={24} pos={"sticky"}>
                        <Flex gap='md' justify={'center'} mb={17}>
                            <Text size='sm' tt='uppercase' fw="bolder" ta='center' pos={"relative"} >how it works</Text>
                            <Text size='sm' tt='uppercase' fw="bolder" ta='center' className="joi">joiner</Text>
                        </Flex>
                        <Text fz={45} fw={'bold'} align='center' pt={15}>Audio Cutter</Text>
                    </Grid.Col>
                    <Grid.Col align='center' mt={-25} pos={"sticky"}>
                        <Text fz={21}>Free editor to trim and cut any audio file online</Text>
                    </Grid.Col>
                    <Grid.Col align='center' pt={35}>
                        <Button variant="outline" radius={'xl'} color="purple" fz={'md'} c='white'>
                            Browse my files
                        </Button>
                    </Grid.Col>
                </Grid>
            </Flex >
        </>
    )
}


export default Cutter;