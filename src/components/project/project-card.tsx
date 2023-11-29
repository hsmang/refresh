import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';


const style = {
  marginTop: 2,
  width: '100%',

  bgcolor: 'background.paper',
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ProjectCard = ({ project }: any) => {
  const theme = useTheme();

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 140, borderRadius: 2, marginBottom:1, }}
            image="/assets/images/tree.jpg"
            title="green iguana"
          />

          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By Arrow
          </Typography>


          <Typography gutterBottom variant="h5" style={{ marginTop: 0.5, }}>

          </Typography>
          <Typography color="text.secondary" variant="body2">

          </Typography>
          <Typography color="text.secondary" variant="body2">

          </Typography>
        </Box>
        <Box sx={{ width: '100%', marginTop: 1, }}>


          <Stack direction="row" spacing={1} style={{ marginBottom: 1, }}>
          <Chip avatar={<Avatar src="/assets/images/github-mark-white.png">G</Avatar>} label="last update : 5 days ago" color="primary" variant="outlined"  />
            <Chip avatar={<Avatar>M</Avatar>} label="KOR" />
            
            {/* <Chip label="success" color="success" /> */}
          </Stack>
          <p></p>
          <BorderLinearProgress variant="determinate" value={70} />
          <Grid container spacing={3} style={{ marginTop: 1, }}>
            {/* <Grid item xs>
              <Item>
                Type
                <Divider />
                Funding
              </Item>
            </Grid> */}
            <Grid item xs={6}>
              <Item>
                Due Date
                <Divider />
                2023-12-31
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                Investors
                <Divider />
                130
              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="0x12...123" secondary="1st" />
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="Spam" />
          </ListItem>
        </List> */}
        <Button
          fullWidth
          size="large"
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() => {
            location.href = `/project/${project.id}`;
          }}
        >
          Detail
        </Button>
      </CardContent>
    </Card>
  );
};
