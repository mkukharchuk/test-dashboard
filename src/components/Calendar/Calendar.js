import { useState, Fragment } from 'react';
// material
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import { Scheduler } from "@aldabil/react-scheduler";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Page from '../Page';
// mock

import { RESOURCES, EVENTS } from "../../_mock/calendar";

// ----------------------------------------------------------------------

export default function Calendar() {
  const [mode, setMode] = useState("default");

  return (
    // <Page title="Dashboard: Products">
    //   <Container>


        <>
      <div style={{ textAlign: "center" }}>
        <span>Resource View Mode: </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("default")}
        >
          Default
        </Button>
        <Button
          color={mode === "tabs" ? "primary" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("tabs")}
        >
          Tabs
        </Button>
      </div>
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


  );
}
