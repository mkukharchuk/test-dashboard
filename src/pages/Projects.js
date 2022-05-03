import { useState, } from 'react';
// material
import { Container, Typography, Button, Box } from '@mui/material';
// components
import { Scheduler } from "@aldabil/react-scheduler";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Page from '../components/Page';
// import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock

import { RESOURCES, EVENTS } from "../_mock/calendar";

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  const [mode, setMode] = useState("tabs");

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Проекты
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        <>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'left', marginBottom: '10px' }}>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("tabs")}
        >
          По городам
        </Button>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("default")}
        >
          Показать все
        </Button>
      </Box>
      <Scheduler
        events={EVENTS}
        resources={RESOURCES}
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          subTextField: "mobile",
          avatarField: "title",
          colorField: "color"
        }}
        resourceViewMode={mode}
        selectedDate={new Date(2021, 4, 2)}
        fields={[
          {
            name: "admin_id",
            type: "select",
            default: RESOURCES[0].admin_id,
            options: RESOURCES.map((res) => ({
                id: res.admin_id,
                text: `${res.title} (${res.mobile})`,
                value: res.admin_id // Should match "name" property
              })),
            config: { label: "Assignee", required: true }
          }
        ]}
        viewerExtraComponent={(fields, event) => (
            <div>
              {fields.map((field, i) => {
                if (field.name === "admin_id") {
                  const admin = field.options.find(
                    (fe) => fe.id === event.admin_id
                  );
                  return (
                    <Typography
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                      color="textSecondary"
                      variant="caption"
                      noWrap
                    >
                       {admin.text}
                    </Typography>
                  );
                }
                  return "";
                              })}
            </div>
          )}
      />
    </>

        {/* <ProductList products={PRODUCTS} />
        <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
