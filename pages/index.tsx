import Sidebar from '../components/sidebar';
import Cutter from '../components/cutter'
import { Box } from '@mantine/core';

export default function HomePage() {
    return (
        <>
            <Box bg={'rgba(0, 0, 10, 0.94)'}>
                <Sidebar />
                <Cutter />
            </Box>
        </>
    );
}
