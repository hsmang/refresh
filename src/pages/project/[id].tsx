import Head from "next/head";
import { Avatar, Box, Button, CardMedia, Chip, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import { Layout as DashboardLayout } from "../../layouts/dashboard/layout";
import { useCallback, useEffect, useState } from "react";
import SimpleDialog from "@/components/project/funding-modal";
import BorderLinearProgress from "@/components/BorderLinearProgress";
import { HomeIcon, InboxIcon } from "@heroicons/react/24/solid";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import HorizontalLinearAlternativeLabelStepper from "@/components/HorizontalLinearAlternativeLabelStepper";
const emails = ['이더리움', '폴리곤'];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Page = () => {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 특정 위치(예: 200px)에서 스크롤이 발생하면 isFixed 상태를 true로 설정
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DashboardLayout>
      <Head>
        <title>Project Detail</title>
      </Head>
      <Box
        sx={{
          flexGrow: 1,
          py: 8,
          
        }}
      >
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
        <Container maxWidth="xl">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8" sx={{backgroundColor:'#99999', padding:2, borderRadius:2,}}>
              <CardMedia
                sx={{ height: 300, borderRadius: 2, marginBottom: 1, }}
                image="/assets/images/tree.jpg"
                title="green iguana"
              />
              <Typography variant="h4">Chip</Typography>
              <Typography variant="subtitle2">
                안녕하세요! 저는 Deal or No Deal의 Brad의 친구 Rochelle입니다! 여러분 모두가 거래나 노딜에서 브래드의 파괴적인 게임을 보셨을 겁니다. 그의 돈디 가족은 정말로 그가 자신의 꿈을 이루기를 원하고 우리는 누군가가 2파운드 정도를 절약해서 브래드가 버킷리스트에서 조금이라도 벗어나도록 할 수 있기를 기대하고 이것을 설정했습니다.

                사랑합니다 브래드
              </Typography>
  
              <div style={{ marginTop: 100 }}></div>
              <HorizontalLinearAlternativeLabelStepper />

              <TableContainer component={Paper} style={{ marginTop: 50, }}>
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        <Typography variant="subtitle2">RAISED</Typography>
                        <Typography variant="h4">
                          £4,701,505.67
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="subtitle2">INVESTORS</Typography>
                        <Typography variant="h4">
                          4544
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="subtitle2">TARGET</Typography>
                        <Typography variant="h4">
                          £1,000,000
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left">
                        <Typography variant="subtitle2">EQUITY</Typography>
                        <Typography variant="h4">
                          2.72%
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="subtitle2">PRE-MONEY VALUATION</Typography>
                        <Typography variant="h4">
                          £167,860,000
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="subtitle2">SHARE PRICE</Typography>
                        <Typography variant="h4">
                          £2.03
                        </Typography>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>

              <List
                sx={{
                  width: '100%',

                  bgcolor: 'background.paper',
                }}
              >
                <ListItem>

                  <ListItemText primary="Problem" secondary="Jan 9, 2014" sx={{ width: '10%' }} />
                  <ListItemText sx={{ width: '70%' }} primary="The savings account is the world’s most popular financial product. Used by 69% of the adults globally, yet many people make little return on their savings; the UK average savings rate is still 1.96%" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>

                  <ListItemText primary="Solution" secondary="Jan 9, 2014" sx={{ width: '10%' }} />
                  <ListItemText sx={{ width: '70%' }} primary="Chip has an award-winning & highly rated app (‘People’s Choice Award 23’ Finder, 4.5* on the App Store) giving users one place to effortlessly & automatically build wealth across savings & investments" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>

                  <ListItemText primary="Business model" secondary="Jan 9, 2014" sx={{ width: '10%' }} />
                  <ListItemText sx={{ width: '70%' }} primary="We offer competitive savings products and investment products, our revenue is a mix of spreads on returns or subscription fees on these. As AuA grows, so does revenue" />
                </ListItem>
              </List>

              <Divider variant="middle" />


              <List
                sx={{
                  marginTop:10,
                  width: '100%',

                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant="h4">주최자 및 Github</Typography>
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon style={{ fontSize: 40, color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="ABCUser" />
                    <ListItemText primary="PolygonId" />
                  </ListItemButton>
                </ListItem>   
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon style={{ fontSize: 40, color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                    <ListItemText>
                      <Chip avatar={<Avatar src="/assets/images/github-mark-white.png">G</Avatar>} label="last update : 5 days ago" color="primary" variant="outlined"  />                      
                    </ListItemText>
                  </ListItemButton>
                </ListItem>              
              </List>

              <List
                sx={{
                  marginTop:10,
                  width: '100%',

                  bgcolor: 'background.paper',
                }}
              >
                <Typography variant="h4">댓글</Typography>
        
                <Divider variant="inset" component="li" />
                <ListItem>

                  <ListItemText primary="Solution" secondary="Jan 9, 2014" sx={{ width: '10%' }} />
                  <ListItemText sx={{ width: '70%' }} primary="Chip has an award-winning & highly rated app (‘People’s Choice Award 23’ Finder, 4.5* on the App Store) giving users one place to effortlessly & automatically build wealth across savings & investments" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>

                  <ListItemText primary="Business model" secondary="Jan 9, 2014" sx={{ width: '10%' }} />
                  <ListItemText sx={{ width: '70%' }} primary="We offer competitive savings products and investment products, our revenue is a mix of spreads on returns or subscription fees on these. As AuA grows, so does revenue" />
                </ListItem>
              </List>
            </Box>
            <Box gridColumn="span 4" sx={{
              // isFixed 값에 따라 스타일을 동적으로 설정
              position: isFixed ? 'sticky' : 'sticky',
              top: isFixed ? '0' : '200',
              borderRadius:2,
              height: 350,
              // 추가적인 스타일은 필요에 따라 조절

              backgroundColor: 'gray',
              boxShadow: isFixed ? '0px 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
              padding: '16px',
            }}>

              <Box>
                <Typography variant="subtitle2">모인금액</Typography>
                <Typography variant="h4">
                  4544 USDC
                </Typography>

                <BorderLinearProgress variant="determinate" value={70} />
              </Box>
              <List>
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <CalendarMonthIcon style={{ fontSize: 40, color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText color="black" primary="기간" />
                    <ListItemText primary="2023-12-31" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon style={{ fontSize: 40, color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="참여자 수" />
                    <ListItemText primary="30명" />
                  </ListItemButton>
                </ListItem>
                
              </List>


              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                variant="contained"
                onClick={handleClickOpen}
              >
                펀딩하기
              </Button>
            </Box>

          </Box>
        </Container>

      </Box>
    </DashboardLayout>
  );
};

export default Page;
