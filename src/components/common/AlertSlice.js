import { Box, Anchor } from "grommet"

const AlertSlice = () => {
    return(
        <Box pad='small' background='paper' margin={{ bottom: 'large' }} gap='small'>
            <span>Still Working On .. 🚧</span>
            <br />
            <span>Currently Tistory Blog is open. You can read some posts there!</span>
            <br />
            <Anchor label='👉 Go to Blog' href='https://uiyoji-journal.tistory.com/' target='blank' />
        </Box>
    ) 
}

export default AlertSlice;