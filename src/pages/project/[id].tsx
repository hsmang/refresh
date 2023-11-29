import Head from "next/head";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "../../layouts/dashboard/layout";
import { useCallback, useState } from "react";

const Page = () => {
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
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Typography variant="h4">Project detail</Typography>
            <Typography variant="subtitle2">Detail</Typography>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default Page;
