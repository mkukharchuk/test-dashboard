import { useState, Fragment } from 'react';
// material
import { Typography, Button, Box } from '@mui/material';
// components
import { Scheduler } from "@aldabil/react-scheduler";
// mock

import { RESOURCES, EVENTS } from "../../_mock/calendar";

// ----------------------------------------------------------------------

export default function Calendar() {
  const [mode, setMode] = useState("tabs");

  return (
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
      view="month"
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
