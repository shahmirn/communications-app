import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Conversations } from "./features/conversations/Conversations";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Communications
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Typography>
          <Conversations />
        </Typography>
      </Box>
    </Box>
  );
}
